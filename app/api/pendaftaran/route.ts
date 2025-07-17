import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const pendaftaran = await prisma.pendaftaran.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nama: true,
                        email: true,
                        noHp: true
                    }
                },
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        harga: true,
                        tanggalMulai: true,
                        tanggalSelesai: true,
                        lamaKursus: true,
                        user: {
                            select: {
                                id: true,
                                nama: true
                            }
                        }
                    }
                },
                Payment: true
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

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                nama: true,
                nik: true,
                jenisKelamin: true,
                tempatLahir: true,
                tanggalLahir: true,
                agama: true,
                jurusan: true,
                tahunAkademik: true,
                noHp: true,
                email: true,
                mediaSosial: true,
            },
        });

        const wajibIsi = [
            user?.nama,
            user?.nik,
            user?.jenisKelamin,
            user?.tempatLahir,
            user?.tanggalLahir,
            user?.agama,
            user?.jurusan,
            user?.tahunAkademik,
            user?.noHp,
            user?.email,
        ];

        const profilLengkap = wajibIsi.every((field) => !!field);

        if (!profilLengkap) {
            return NextResponse.json(
                {
                    message: "Harap lengkapi profil Anda terlebih dahulu sebelum mendaftar.",
                },
                { status: 400 }
            );
        }

        const sudahTerdaftar = await prisma.pendaftaran.findFirst({
            where: {
                userId,
                kursusId,
            },
        });

        if (sudahTerdaftar) {
            return NextResponse.json(
                { message: "Anda sudah mendaftar pada kursus ini." },
                { status: 400 }
            );
        }

        const kursusBelumSelesai = await prisma.pendaftaran.findFirst({
            where: {
                userId,
                status: {
                    not: "Lulus Pelatihan",
                },
            },
        });

        if (kursusBelumSelesai) {
            return NextResponse.json(
                {
                    message:
                        "Anda harus menyelesaikan kursus sebelumnya terlebih dahulu.",
                },
                { status: 400 }
            );
        }

        const pendaftaran = await prisma.pendaftaran.create({
            data: {
                user: { connect: { id: userId } },
                kursus: { connect: { id: kursusId } },
                status: "Menunggu diverifikasi",
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
                                nama: true,
                            },
                        },
                    },
                },
            },
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


