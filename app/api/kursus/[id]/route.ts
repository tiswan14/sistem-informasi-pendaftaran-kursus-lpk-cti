import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { getKursusDetailById } from "@/lib/data";
import { put } from '@vercel/blob';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'


export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const kursus = await getKursusDetailById(id);
        if (!kursus) {
            return NextResponse.json({ error: 'Kursus tidak ditemukan' }, { status: 404 });
        }
        return NextResponse.json({ kursus });
    } catch (error) {
        console.error('Error getting kursus detail:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const formData = await request.formData();

        const nama = formData.get("nama")?.toString();
        const deskripsi = formData.get("deskripsi")?.toString() || null;
        const hargaStr = formData.get("harga")?.toString();
        const lamaKursusStr = formData.get("lamaKursus")?.toString() || null;
        const tanggalMulaiStr = formData.get("tanggalMulai")?.toString() || null;
        const tanggalSelesaiStr = formData.get("tanggalSelesai")?.toString() || null;
        const kuotaStr = formData.get("kuota")?.toString() || null;
        const userId = formData.get("userId")?.toString() || null;
        const status = formData.get("status")?.toString() || undefined;
        const thumbnail = formData.get("thumbnail") as File | null;

        if (!nama || !hargaStr) {
            return NextResponse.json(
                { error: "Nama dan harga kursus harus diisi" },
                { status: 400 }
            );
        }

        const harga = Number(hargaStr);
        if (isNaN(harga)) {
            return NextResponse.json(
                { error: "Harga harus berupa angka" },
                { status: 400 }
            );
        }

        const lamaKursus = lamaKursusStr ? Number(lamaKursusStr) : null;
        const tanggalMulai = tanggalMulaiStr ? new Date(tanggalMulaiStr) : null;
        const tanggalSelesai = tanggalSelesaiStr ? new Date(tanggalSelesaiStr) : null;
        const kuota = kuotaStr ? Number(kuotaStr) : null;

        let thumbnailData = undefined;
        if (thumbnail && thumbnail.size > 0) {
            const blob = await put(
                `kursus/thumbnail-${Date.now()}`,
                thumbnail,
                { access: "public", contentType: thumbnail.type }
            );
            thumbnailData = blob.url;
        }

        const updatedKursus = await prisma.kursus.update({
            where: { id },
            data: {
                nama,
                deskripsi,
                harga,
                lamaKursus,
                tanggalMulai,
                tanggalSelesai,
                kuota,
                userId,
                status,
                ...(thumbnailData !== undefined && { thumbnail: thumbnailData }),
            },
        });

        return NextResponse.json(updatedKursus, { status: 200 });
    } catch (error) {
        console.error("Gagal memperbarui kursus:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Terjadi kesalahan saat memperbarui kursus." },
            { status: 500 }
        );
    }
}

export const DELETE = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    const { id } = await context.params;

    try {
        const deleteKursus = await prisma.kursus.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ deleteKursus }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus kursus:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};
