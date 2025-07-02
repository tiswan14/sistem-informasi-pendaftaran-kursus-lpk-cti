import { NextResponse, NextRequest } from 'next/server';
import { getPesertaDetailById } from '@/lib/data';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'


export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;

        const peserta = await getPesertaDetailById(id);
        if (!peserta) {
            return NextResponse.json({ error: 'Peserta tidak ditemukan' }, { status: 404 });
        }

        return NextResponse.json({ peserta });
    } catch (error: unknown) {
        console.error('Error getting peserta detail:', error);
        const message = error instanceof Error ? error.message : 'Internal server error';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;

        const deletePeserta = await prisma.user.delete({
            where: { id },
        });

        return NextResponse.json({ deletePeserta }, { status: 200 });
    } catch (error: unknown) {
        console.error("Error menghapus Peserta:", error);
        const message = error instanceof Error ? error.message : "Gagal menghapus peserta atau ID tidak ditemukan";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
