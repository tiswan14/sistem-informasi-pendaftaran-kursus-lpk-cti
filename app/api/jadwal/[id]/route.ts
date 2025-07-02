import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { JadwalInput } from "@/types/JadwalInput";

export const dynamic = 'force-dynamic'


export const GET = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json({ error: "ID jadwal tidak valid" }, { status: 400 });
        }

        const jadwal = await prisma.jadwal.findUnique({
            where: { id },
            include: {
                kursus: true,
            },
        });

        if (!jadwal) {
            return NextResponse.json({ error: "Jadwal tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(jadwal, { status: 200 });

    } catch (error: unknown) {
        console.error("Get jadwal error:", error);
        const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const PUT = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json({ error: "ID jadwal tidak valid" }, { status: 400 });
        }

        const body: Partial<JadwalInput> = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json({ error: "Data update tidak boleh kosong" }, { status: 400 });
        }

        const updatedJadwal = await prisma.jadwal.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(updatedJadwal, { status: 200 });

    } catch (error: unknown) {
        console.error("Update jadwal error:", error);
        const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const DELETE = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json({ error: "ID jadwal tidak valid" }, { status: 400 });
        }

        const deletedJadwal = await prisma.jadwal.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Jadwal berhasil dihapus", data: deletedJadwal }, { status: 200 });

    } catch (error: unknown) {
        console.error("Error menghapus jadwal:", error);
        const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
