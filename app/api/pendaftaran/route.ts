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

        // ✅ Cek apakah user sudah mendaftar ke kursus ini sebelumnya
        const sudahTerdaftar = await prisma.pendaftaran.findFirst({
            where: {
                userId,
                kursusId
            }
        });

        if (sudahTerdaftar) {
            return NextResponse.json(
                { message: "Anda sudah mendaftar pada kursus ini." },
                { status: 400 }
            );
        }

        // ✅ Cek apakah user sedang menjalani kursus yang belum selesai
        const kursusBelumSelesai = await prisma.pendaftaran.findFirst({
            where: {
                userId,
                status: {
                    not: "Selesai"
                }
            }
        });

        if (kursusBelumSelesai) {
            return NextResponse.json(
                { message: "Anda harus menyelesaikan kursus sebelumnya terlebih dahulu." },
                { status: 400 }
            );
        }

        // ✅ Buat pendaftaran
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

