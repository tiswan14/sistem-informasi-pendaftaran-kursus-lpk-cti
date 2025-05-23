import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

// Handler untuk PATCH
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { status } = await request.json();

        // Validasi status
        const allowedStatus = ['Belum verifikasi', 'Ditolak', 'Diterima', 'Lulus'];
        if (!allowedStatus.includes(status)) {
            return NextResponse.json(
                { error: 'Status tidak valid' },
                { status: 400 }
            );
        }

        // Update data di database
        const updatedPendaftaran = await prisma.pendaftaran.update({
            where: { id: params.id },
            data: { status },
        });

        return NextResponse.json(updatedPendaftaran);
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Gagal memperbarui status' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

// Handler untuk OPTIONS (untuk CORS preflight)
export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
}