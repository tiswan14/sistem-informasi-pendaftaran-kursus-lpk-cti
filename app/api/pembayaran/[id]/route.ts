import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

export const DELETE = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
) => {
    const { id } = await context.params;

    try {
        const deletePembayaran = await prisma.payment.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ deletePembayaran }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus pembayaran:", error);

        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { error: "Pembayaran tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
};