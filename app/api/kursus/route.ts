import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob'

export type KursusInput = {
    nama: string;
    deskripsi?: string;
    harga: number;
    lamaKursus?: number;
    kuota?: number;
    thumbnail?: string;
    tanggalMulai?: string | Date;
    tanggalSelesai?: string | Date;
    userId?: string;
}


export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const nama = formData.get("nama")?.toString();
        const deskripsi = formData.get("deskripsi")?.toString() || null;
        const hargaStr = formData.get("harga")?.toString();
        const lamaKursusStr = formData.get("lamaKursus")?.toString() || null;
        const tanggalMulaiStr = formData.get("tanggalMulai")?.toString() || null;
        const kuotaStr = formData.get("kuota")?.toString() || null;
        const kuota = kuotaStr ? Number(kuotaStr) : null;
        const tanggalSelesaiStr = formData.get("tanggalSelesai")?.toString() || null;
        const userId = formData.get("userId")?.toString() || null;
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

        let thumbnailData = null;
        if (thumbnail && thumbnail.size > 0) {
            const blob = await put(
                `kursus/thumbnail-${Date.now()}`,
                thumbnail,
                { access: "public", contentType: thumbnail.type }
            );
            thumbnailData = blob.url;
        }

        const newKursus = await prisma.kursus.create({
            data: {
                nama,
                deskripsi,
                harga,
                lamaKursus,
                kuota,
                tanggalMulai,
                tanggalSelesai,
                userId,
                thumbnail: thumbnailData,
            },
        });

        return NextResponse.json(newKursus, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Internal server error" },
            { status: 500 }
        );
    }
}



export async function GET() {
    try {
        const allKursus = await prisma.kursus.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        nama: true
                    }
                }
            },
            orderBy: {
                nama: "asc"
            }
        });
        return NextResponse.json(allKursus);

    } catch (error) {
        console.error("Gagal fetch kursus:", error);
        return NextResponse.json({ error: "Gagal mengambil data kursus" }, { status: 500 });
    }
}

