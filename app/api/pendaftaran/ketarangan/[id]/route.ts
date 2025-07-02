import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'

export async function PATCH(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const { status, keterangan } = await request.json();

        const allowedStatus = ['Belum verifikasi', 'Ditolak', 'Diterima', 'Lulus'];
        if (!allowedStatus.includes(status)) {
            return NextResponse.json(
                { error: 'Status tidak valid' },
                { status: 400 }
            );
        }

        if (keterangan !== undefined && typeof keterangan !== 'string') {
            return NextResponse.json(
                { error: 'Keterangan harus berupa string' },
                { status: 400 }
            );
        }

        const updatedPendaftaran = await prisma.pendaftaran.update({
            where: { id },
            data: { status, keterangan },
        });

        return NextResponse.json(updatedPendaftaran);
    } catch (error: unknown) {
        console.error('Error:', error);
        const message = error instanceof Error ? error.message : 'Gagal memperbarui data';
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// Untuk preflight CORS
export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
}
