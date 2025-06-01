import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // atau sesuaikan import prisma kamu

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
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
        return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: payment }, { status: 200 });
}
