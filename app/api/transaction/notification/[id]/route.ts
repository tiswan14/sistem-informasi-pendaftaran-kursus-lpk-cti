import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'


export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json({ error: 'ID diperlukan' }, { status: 400 });
        }

        const payment = await prisma.payment.findUnique({
            where: { pendaftaranId: id },
            include: {
                pendaftaran: {
                    include: {
                        user: true,
                        kursus: true,
                    },
                },
            },
        });

        if (!payment) {
            return NextResponse.json({ error: 'Data pembayaran tidak ditemukan' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: payment }, { status: 200 });
    } catch (error: unknown) {
        console.error('Terjadi kesalahan saat mengambil data pembayaran:', error);
        const message = error instanceof Error ? error.message : 'Internal server error';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
