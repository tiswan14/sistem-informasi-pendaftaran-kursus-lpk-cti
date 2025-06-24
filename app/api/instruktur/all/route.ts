import { PrismaClient } from "@/app/generated/prisma";

import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

type Instruktur = {
    id: string;
    nama: string;
    nik: string;
    jenisKelamin: string;
    noHp: string;
    email: string;
    keahlian: string;
    jabatan: string;
};

// Response type untuk error
type ErrorResponse = {
    error: string;
    details?: string;
};

// Fungsi utama GET handler
export async function GET(): Promise<NextResponse<Instruktur[] | ErrorResponse>> {
    try {
        const allInstruktur = await prisma.user.findMany({
            where: {
                role: "instruktur",
            },
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
            orderBy: {
                nama: "asc",
            },
        });

        // Type assertion ke Instruktur[]
        const instrukturs = allInstruktur as Instruktur[];

        return NextResponse.json(instrukturs);

    } catch (error) {
        console.error("Gagal fetch instruktur:", error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json(
            {
                error: "Gagal mengambil data instruktur",
                details: errorMessage
            },
            { status: 500 }
        );
    }
}
