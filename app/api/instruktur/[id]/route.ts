import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { hashSync } from "bcrypt-ts";

const prisma = new PrismaClient();

interface InstrukturInput {
    nama: string;
    nik: string;
    jenisKelamin: string;
    noHp: string;
    email: string;
    keahlian: string;
    jabatan: string;
    password?: string;
}

export const PUT = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    try {
        if (!params.id) {
            return NextResponse.json(
                { error: "ID instruktur tidak valid" },
                { status: 400 }
            );
        }

        const body: Partial<InstrukturInput> = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "Data update tidak boleh kosong" },
                { status: 400 }
            );
        }

        if (body.password) {
            body.password = hashSync(body.password, 10);
        }

        const updateInstruktur = await prisma.user.update({
            where: { id: params.id },
            data: body,
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = updateInstruktur;

        return NextResponse.json(userWithoutPassword, { status: 200 });

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
        const deleteInstruktur = await prisma.user.delete({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ deleteInstruktur }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus instruktur:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};

