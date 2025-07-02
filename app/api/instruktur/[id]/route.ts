import { prisma } from "@/lib/prisma";
import { hashSync } from "bcryptjs";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.$connect();

        const id = params.id;
        if (!id) {
            return NextResponse.json(
                { error: "ID instruktur tidak valid" },
                { status: 400 }
            );
        }

        const body = await request.json();
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
        return NextResponse.json(userWithoutPassword);

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        console.error("Update error:", message);
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}




export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.$connect();

        const id = params.id;
        if (!id) {
            return NextResponse.json(
                { error: "ID instruktur tidak valid" },
                { status: 400 }
            );
        }

        const deleteInstruktur = await prisma.user.delete({
            where: { id },
        });

        return NextResponse.json(
            { success: true, data: deleteInstruktur }
        );

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal server error";
        console.error("Delete error:", message);

        // Handle Prisma not found error specifically
        if (message.includes('RecordNotFound')) {
            return NextResponse.json(
                { error: "Instruktur tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

