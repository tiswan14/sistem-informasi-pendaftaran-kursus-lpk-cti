import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'


export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const kursus = await prisma.kursus.findUnique({
            where: {
                id,
            },
            include: {
                user: true,
            },
        });

        if (!kursus) {
            return NextResponse.json(
                { error: 'Kursus tidak ditemukan' },
                { status: 404 }
            );
        }

        return NextResponse.json(kursus);
    } catch (error) {
        console.error('Error getting kursus detail:', error);
        return NextResponse.json(
            { error: 'Terjadi kesalahan pada server' },
            { status: 500 }
        );
    }
}
