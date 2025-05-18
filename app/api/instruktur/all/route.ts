import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const allKursus = await prisma.user.findMany({
            where: {
                role: "instruktur",
            },
            orderBy: {
                nama: "asc",
            },
        });
        return NextResponse.json(allKursus);

    } catch (error) {
        console.error("Gagal fetch instruktur:", error);
        return NextResponse.json({ error: "Gagal mengambil data instruktur" }, { status: 500 });
    }
}