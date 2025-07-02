import { prisma } from "@/lib/prisma";
import { hashSync } from "bcryptjs";
import { InstrukturInput } from "@/types/InstrukturInput";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const PUT = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const { id } = await context.params;

        if (!id) {
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
            where: { id },
            data: body,
        });

        const { password, ...userWithoutPassword } = updateInstruktur;

        return NextResponse.json(userWithoutPassword, {
            status: 200,
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Internal server error";
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
        const { id } = params;

        const deleteInstruktur = await prisma.user.delete({
            where: {
                id: id,
            },
        });

        return NextResponse.json({ deleteInstruktur }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus instruktur:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};