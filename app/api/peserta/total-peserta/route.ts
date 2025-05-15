import { NextResponse } from 'next/server';
import { getTotalPeserta } from '@/lib/data';

export async function GET() {
    try {
        const total = await getTotalPeserta();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total peserta:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
