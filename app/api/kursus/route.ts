import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export type KursusInput = {
    nama: string;
    deskripsi?: string;
    harga: number;
    lamaKursus?: number;
    tanggalMulai?: string | Date;
    tanggalSelesai?: string | Date;
    userId?: string;
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
            }
        });
        return NextResponse.json(allKursus);

    } catch (error) {
        console.error("Gagal fetch instruktur:", error);
        return NextResponse.json({ error: "Gagal mengambil data instruktur" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body: KursusInput = await request.json();

        if (!body.nama || !body.harga) {
            return NextResponse.json(
                { error: "Nama dan harga kursus harus diisi" },
                { status: 400 }
            );
        }

        const data = {
            ...body,
            tanggalMulai: body.tanggalMulai ? new Date(body.tanggalMulai) : null,
            tanggalSelesai: body.tanggalSelesai ? new Date(body.tanggalSelesai) : null,
        };

        const newKursus = await prisma.kursus.create({
            data,
            include: {
                user: {
                    select: {
                        id: true,
                        nama: true,
                    }
                }
            }
        });

        return NextResponse.json(newKursus, { status: 201 });
    } catch (error: unknown) {
        console.error("Error creating kursus:", error);

        const message =
            error instanceof Error ? error.message : "Gagal membuat kursus";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}