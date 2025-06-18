/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { hashSync } from "bcrypt-ts";
import { InstrukturInput } from "@/types/InstrukturInput";

const prisma = new PrismaClient();

export const PUT = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const { id } = await context.params;

        if (!id) {
            return new Response(JSON.stringify({ error: "ID instruktur tidak valid" }), {
                status: 400,
            });
        }

        const body: Partial<InstrukturInput> = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return new Response(JSON.stringify({ error: "Data update tidak boleh kosong" }), {
                status: 400,
            });
        }

        if (body.password) {
            body.password = hashSync(body.password, 10);
        }

        const updateInstruktur = await prisma.user.update({
            where: { id },
            data: body,
        });

        const { password, ...userWithoutPassword } = updateInstruktur;

        return new Response(JSON.stringify(userWithoutPassword), {
            status: 200,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";

        return new Response(JSON.stringify({ error: message }), {
            status: 500,
        });
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

        const deleteInstruktur = await prisma.user.delete({
            where: {
                id: id,
            },
        });

        return Response.json({ deleteInstruktur }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus instruktur:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

