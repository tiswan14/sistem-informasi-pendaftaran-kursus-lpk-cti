import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from "@/app/generated/prisma";
import { del } from '@vercel/blob';


const prisma = new PrismaClient();



export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const body = await request.json();

        const { nomor, tanggalTerbit, pendaftaranId } = body;

        if (!nomor || !tanggalTerbit || !pendaftaranId) {
            return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
        }

        const existing = await prisma.sertifikat.findUnique({ where: { id } });
        if (!existing) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        const updated = await prisma.sertifikat.update({
            where: { id },
            data: {
                nomor,
                tanggalTerbit: new Date(tanggalTerbit),
                pendaftaranId,
            },
        });

        return NextResponse.json(updated);
    } catch (err) {
        console.error("Gagal update:", err);
        return NextResponse.json({ error: "Terjadi kesalahan saat memperbarui data" }, { status: 500 });
    }
}






export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const sertifikat = await prisma.sertifikat.findUnique({
            where: { id },
            include: {
                pendaftaran: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                nama: true
                            }
                        },
                        kursus: {
                            select: {
                                nama: true
                            }
                        }
                    }
                }
            }
        });

        if (!sertifikat) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(sertifikat);
    } catch (error) {
        console.error("Gagal mengambil sertifikat:", error);
        return NextResponse.json({ error: "Terjadi kesalahan saat mengambil data sertifikat" }, { status: 500 });
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const sertifikat = await prisma.sertifikat.findUnique({ where: { id } });
        if (!sertifikat) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        // Hapus file dari Vercel Blob jika ada
        if (sertifikat.fileUrl) {
            const url = new URL(sertifikat.fileUrl);
            const pathname = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
            await del(pathname); // Hapus dari Vercel Blob
        }

        // Hapus dari database
        await prisma.sertifikat.delete({ where: { id } });

        return NextResponse.json({ message: "Sertifikat dan file berhasil dihapus" }, { status: 200 });
    } catch (error) {
        console.error("Gagal menghapus sertifikat:", error);
        return NextResponse.json({ error: "Terjadi kesalahan saat menghapus sertifikat" }, { status: 500 });
    }
}