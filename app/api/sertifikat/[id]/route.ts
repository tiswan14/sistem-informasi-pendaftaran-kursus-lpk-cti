import { NextResponse } from 'next/server';
import { PrismaClient } from "@/app/generated/prisma";
import { del } from '@vercel/blob';
import { put } from '@vercel/blob';


const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const formData = await request.formData();

        const nomor = formData.get('nomor') as string;
        const tanggalTerbit = formData.get('tanggalTerbit') as string;
        const file = formData.get('file') as File | null;

        if (!nomor || !tanggalTerbit) {
            return NextResponse.json({ error: "Nomor dan tanggal terbit wajib diisi" }, { status: 400 });
        }

        const existing = await prisma.sertifikat.findUnique({ where: { id } });
        if (!existing) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        let fileUrl = existing.fileUrl;
        let fileName = existing.fileName;
        let fileType = existing.fileType;
        let fileSize = existing.fileSize;

        if (file) {
            const blob = await put(`sertifikat/${nomor}-${Date.now()}`, file, {
                access: 'public',
                contentType: file.type
            });

            fileUrl = blob.url;
            fileName = file.name;
            fileType = file.type;
            fileSize = file.size;
        }

        const updated = await prisma.sertifikat.update({
            where: { id },
            data: {
                nomor,
                tanggalTerbit,
                fileUrl,
                fileName,
                fileType,
                fileSize
            }
        });

        return NextResponse.json(updated, { status: 200 });
    } catch (error) {
        console.error("Gagal memperbarui sertifikat:", error);
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