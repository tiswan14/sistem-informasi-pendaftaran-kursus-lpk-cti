export const runtime = 'nodejs';


import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { auth } from "@/auth";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'


const hariOrder: Record<string, number> = {
    Senin: 1,
    Selasa: 2,
    Rabu: 3,
    Kamis: 4,
    Jumat: 5,
    Sabtu: 6,
    Minggu: 7,
};

type Jadwal = {
    hari: keyof typeof hariOrder;
    jamMulai: string;
};

type Kursus = {
    id: string;
    nama: string;
    jadwal: Jadwal[];
};

type Pendaftaran = {
    id: string;
    kursus?: Kursus;
};


export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const pendaftaran = await prisma.pendaftaran.findMany({
            where: {
                user: {
                    email: session.user.email,
                },
                status: "Terverifikasi",
                Payment: {
                    isNot: null,
                },
            },
            select: {
                id: true,
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        jadwal: {
                            where: {
                                status: "aktif",
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: "asc",
            },
        });


        pendaftaran.forEach((item: Pendaftaran) => {
            if (item.kursus?.jadwal) {
                item.kursus.jadwal.sort((a: Jadwal, b: Jadwal) => {
                    if (hariOrder[a.hari] !== hariOrder[b.hari]) {
                        return hariOrder[a.hari] - hariOrder[b.hari];
                    }
                    if (a.jamMulai < b.jamMulai) return -1;
                    if (a.jamMulai > b.jamMulai) return 1;
                    return 0;
                });
            }
        });

        return NextResponse.json(pendaftaran);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
