import { NextResponse } from 'next/server';
import { getTotalInstruktur } from '@/lib/data';

export async function GET() {
    try {
        const total = await getTotalInstruktur();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total peserta:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
