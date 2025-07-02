import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Verify connection first
        await prisma.$connect();

        const allInstruktur = await prisma.user.findMany({
            where: { role: "instruktur" },
            select: {
                id: true,
                nama: true,
                nik: true,
                jenisKelamin: true,
                noHp: true,
                email: true,
                keahlian: true,
                jabatan: true,
            },
            orderBy: { nama: "asc" },
        });

        return NextResponse.json(allInstruktur);

    } catch (error) {
        console.error("Error:", error);

        const message = error instanceof Error
            ? error.message
            : "Unknown error occurred";

        return NextResponse.json(
            { error: "Database error", details: message },
            { status: 500 }
        );
    }
    finally {
        await prisma.$disconnect();
    }
}