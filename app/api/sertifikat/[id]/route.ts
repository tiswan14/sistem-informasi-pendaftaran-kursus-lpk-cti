import { NextResponse, NextRequest } from 'next/server';
import { prisma } from "@/lib/prisma";
import { del } from '@vercel/blob';

export const dynamic = 'force-dynamic'

// PUT: Update data sertifikat
export async function PUT(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
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
    } catch (error: unknown) {
        console.error("Gagal update:", error);
        const message = error instanceof Error ? error.message : "Terjadi kesalahan saat memperbarui data";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// GET: Ambil detail sertifikat
export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const sertifikat = await prisma.sertifikat.findUnique({
            where: { id },
            include: {
                pendaftaran: {
                    select: {
                        id: true,
                        user: { select: { nama: true } },
                        kursus: { select: { nama: true } }
                    }
                }
            }
        });

        if (!sertifikat) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(sertifikat);
    } catch (error: unknown) {
        console.error("Gagal mengambil sertifikat:", error);
        const message = error instanceof Error ? error.message : "Terjadi kesalahan saat mengambil data sertifikat";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// DELETE: Hapus sertifikat dan file
export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const sertifikat = await prisma.sertifikat.findUnique({ where: { id } });
        if (!sertifikat) {
            return NextResponse.json({ error: "Sertifikat tidak ditemukan" }, { status: 404 });
        }

        // Hapus file dari Vercel Blob
        if (sertifikat.fileUrl) {
            const url = new URL(sertifikat.fileUrl);
            const pathname = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
            await del(pathname);
        }

        // Hapus dari database
        await prisma.sertifikat.delete({ where: { id } });

        return NextResponse.json({ message: "Sertifikat dan file berhasil dihapus" }, { status: 200 });
    } catch (error: unknown) {
        console.error("Gagal menghapus sertifikat:", error);
        const message = error instanceof Error ? error.message : "Terjadi kesalahan saat menghapus sertifikat";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
