import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export type KursusInput = {
    nama: string;
    harga: number;
    userId: string
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

        const newKursus = await prisma.kursus.create({
            data: {
                ...body,
            },
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
