import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const pendaftaran = await prisma.pendaftaran.findMany({
            include: {
                user: true,
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        harga: true,
                    }
                },
                Pembayaran: true
            },
        })

        return NextResponse.json(pendaftaran);
    } catch (error) {
        console.error("Gagal fetch peserta:", error);
        return NextResponse.json({ error: "Gagal mengambil data peserta" }, { status: 500 });
    }
}
