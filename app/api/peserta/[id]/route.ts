import { NextResponse, NextRequest } from 'next/server';
import { getPesertaDetailById } from '@/lib/data';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const peserta = await getPesertaDetailById(params.id);
        if (!peserta) {
            return NextResponse.json({ error: 'Peserta tidak ditemukan' }, { status: 404 });
        }
        return NextResponse.json({ peserta });
    } catch (error) {
        console.error('Error getting peserta detail:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const deletePeserta = await prisma.user.delete({
            where: {
                id: params.id,
            },
        });

        return NextResponse.json({ deletePeserta }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus Peserta:", error);
        return NextResponse.json({ error: "Gagal menghapus peserta atau ID tidak ditemukan" }, { status: 500 });
    }
}