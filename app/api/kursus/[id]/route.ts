import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { KursusInput } from "../route";

const prisma = new PrismaClient();


export const PUT = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    try {
        if (!params.id) {
            return NextResponse.json(
                { error: "ID kursus tidak valid" },
                { status: 400 }
            );
        }

        const body: Partial<KursusInput> = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "Data update tidak boleh kosong" },
                { status: 400 }
            );
        }

        const updateKursus = await prisma.kursus.update({
            where: { id: params.id },
            data: body,
        });


        return NextResponse.json(updateKursus, { status: 200 });

    } catch (error: unknown) {
        console.error("Update error:", error);
        const message = error instanceof Error
            ? error.message
            : "Internal server error";

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
};


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



