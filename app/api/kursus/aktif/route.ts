import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const allKursus = await prisma.kursus.findMany({
            where: {
                status: "aktif"
            },
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

