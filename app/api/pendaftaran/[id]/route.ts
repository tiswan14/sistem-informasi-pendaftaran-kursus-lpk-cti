import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();



export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params

        const pendaftaran = await prisma.pendaftaran.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        nama: true,
                        email: true,
                        noHp: true,
                    }
                },
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        harga: true,
                        user: {
                            select: {
                                id: true,
                                nama: true,
                            },
                        },
                    },
                },
                Payment: true,
            },
        })

        if (!pendaftaran) {
            return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
        }

        return NextResponse.json(pendaftaran)
    } catch (error) {
        console.error('Gagal fetch pendaftaran by ID:', error)
        return NextResponse.json({ error: 'Gagal mengambil data pendaftaran' }, { status: 500 })
    }
}

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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


