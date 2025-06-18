import { NextResponse } from 'next/server';
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const instruktur = await prisma.user.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!instruktur) {
            return NextResponse.json(
                { error: 'Instruktur tidak ditemukan' },
                { status: 404 }
            );
        }

        return NextResponse.json(instruktur);
    } catch (error) {
        console.error('Error getting instruktur detail:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
