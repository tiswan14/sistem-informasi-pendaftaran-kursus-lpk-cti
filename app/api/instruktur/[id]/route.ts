import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

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

