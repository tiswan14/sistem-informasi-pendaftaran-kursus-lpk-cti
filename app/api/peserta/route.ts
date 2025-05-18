import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const peserta = await prisma.user.findMany({
            where: { role: "peserta" },
            orderBy: { nama: "asc" },
        });

        return NextResponse.json(peserta);
    } catch (error) {
        console.error("Gagal fetch peserta:", error);
        return NextResponse.json({ error: "Gagal mengambil data peserta" }, { status: 500 });
    }
}
