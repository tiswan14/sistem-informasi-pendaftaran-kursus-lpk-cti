import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const pendaftaran = await prisma.pendaftaran.findMany({
            take: 3,
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                status: true,
                createdAt: true,
                user: {
                    select: {
                        nama: true
                    }
                },
                kursus: {
                    select: {
                        nama: true
                    }
                }
            }
        });

        // Format respons agar langsung sesuai tampilan
        const result = pendaftaran.map(item => ({
            id: item.id,
            nama: item.user?.nama || "-",
            kursus: item.kursus?.nama || "-",
            tanggal: item.createdAt.toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }),
            status: item.status || "Belum diverifikasi"
        }));

        return NextResponse.json(result);
    } catch (error) {
        console.error("Gagal fetch peserta:", error);
        return NextResponse.json({ error: "Gagal mengambil data peserta" }, { status: 500 });
    }
}
