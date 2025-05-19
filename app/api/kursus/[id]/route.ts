import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const kursus = await prisma.kursus.findUnique({
            where: { id: params.id },
            include: { user: true }
        })

        if (!kursus) {
            return NextResponse.json(
                { error: "Kursus tidak ditemukan" },
                { status: 404 }
            )
        }

        return NextResponse.json(kursus)
    } catch (error) {
        console.error("Error fetching kursus:", error)
        return NextResponse.json(
            { error: "Gagal mengambil data kursus" },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json()

        const updatedKursus = await prisma.kursus.update({
            where: { id: params.id },
            data: {
                nama: body.nama,
                harga: Number(body.harga),
                userId: body.userId
            }
        })

        return NextResponse.json(updatedKursus)
    } catch (error) {
        console.error("Error updating kursus:", error)
        return NextResponse.json(
            { error: "Gagal memperbarui kursus" },
            { status: 500 }
        )
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



