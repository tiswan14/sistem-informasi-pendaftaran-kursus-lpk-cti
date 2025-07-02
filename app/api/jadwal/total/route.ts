import { NextResponse } from 'next/server';
import { getTotalJadwal } from '@/lib/data';

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const total = await getTotalJadwal();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total sertifikat:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
