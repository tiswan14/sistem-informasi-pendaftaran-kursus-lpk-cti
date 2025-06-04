import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export type JadwalInput = {
    kursusId: string;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    deskripsi?: string;
    lokasi?: string;
    ruangan?: string;
    status?: string;
}

export async function GET() {
    try {
        const allJadwal = await prisma.jadwal.findMany({
            include: {
                kursus: {
                    include: {
                        user: {
                            select: {
                                nama: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                jamMulai: 'asc'
            }
        });

        return NextResponse.json(allJadwal);
    } catch (error) {
        console.error("Gagal fetch jadwal:", error);
        return NextResponse.json({ error: "Gagal mengambil data jadwal" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body: JadwalInput = await request.json();

        const {
            kursusId,
            deskripsi,
            hari,
            jamMulai,
            jamSelesai,
            lokasi,
            ruangan,
            status
        } = body;

        if (!kursusId || !hari || !jamMulai || !jamSelesai) {
            return NextResponse.json(
                { error: "Kursus ID, hari, jam mulai, dan jam selesai wajib diisi" },
                { status: 400 }
            );
        }

        const newJadwal = await prisma.jadwal.create({
            data: {
                kursusId,
                deskripsi,
                hari,
                jamMulai,
                jamSelesai,
                lokasi,
                ruangan,
                status: status || "aktif"
            },
            include: {
                kursus: {
                    select: {
                        id: true,
                        nama: true
                    }
                },
            }
        });

        return NextResponse.json(newJadwal, { status: 201 });
    } catch (error: unknown) {
        console.error("Gagal membuat jadwal:", error);

        const message = error instanceof Error ? error.message : "Gagal membuat jadwal";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
