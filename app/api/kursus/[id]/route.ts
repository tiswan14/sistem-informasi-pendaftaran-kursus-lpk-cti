import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { getKursusDetailById } from "@/lib/data";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const kursus = await getKursusDetailById(params.id)
        if (!kursus) {
            return NextResponse.json({ error: 'Kursus tidak ditemukan' }, { status: 404 });
        }
        return NextResponse.json({ kursus });
    } catch (error) {
        console.error('Error getting kursus detail:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();

        const {
            nama,
            deskripsi,
            harga,
            lamaKursus,
            tanggalMulai,
            tanggalSelesai,
            userId,
        } = body;


        const updatedKursus = await prisma.kursus.update({
            where: { id: params.id },
            data: {
                nama,
                deskripsi: deskripsi || null,
                harga: Number(harga),
                lamaKursus: lamaKursus ? Number(lamaKursus) : null,
                tanggalMulai: tanggalMulai ? new Date(tanggalMulai) : null,
                tanggalSelesai: tanggalSelesai ? new Date(tanggalSelesai) : null,
                userId: userId || null,
            },
        });

        return NextResponse.json(updatedKursus, { status: 200 });
    } catch (error) {
        console.error("Gagal memperbarui kursus:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan saat memperbarui kursus." },
            { status: 500 }
        );
    }
}


export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const deleteKursus = await prisma.kursus.delete({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ deleteKursus }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus instruktur:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};



