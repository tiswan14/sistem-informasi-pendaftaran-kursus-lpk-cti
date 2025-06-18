import { NextResponse } from 'next/server';
import { getTotalSertifikat } from '@/lib/data';

export async function GET() {
    try {
        const total = await getTotalSertifikat();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total sertifikat:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
