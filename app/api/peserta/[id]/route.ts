import { NextResponse } from 'next/server';
import { getPesertaDetailById } from '@/lib/data';

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
