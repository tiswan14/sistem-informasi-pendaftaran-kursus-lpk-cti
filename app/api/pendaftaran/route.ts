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
                        user: {
                            select: {
                                id: true,
                                nama: true
                            }
                        }
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

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, kursusId } = body;

        if (!userId || !kursusId) {
            return NextResponse.json(
                { message: "User ID dan Kursus ID harus diisi" },
                { status: 400 }
            );
        }

        const pendaftaran = await prisma.pendaftaran.create({
            data: {
                user: { connect: { id: userId } },
                kursus: { connect: { id: kursusId } },
                status: "Belum diverifikasi"
            },
            include: {
                user: true,
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        harga: true,
                        user: {
                            select: {
                                id: true,
                                nama: true
                            }
                        }
                    }
                }
            }
        });

        return NextResponse.json(pendaftaran, { status: 201 });

    } catch (error) {
        console.error("Gagal membuat pendaftaran:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan saat membuat pendaftaran" },
            { status: 500 }
        );
    }
}
