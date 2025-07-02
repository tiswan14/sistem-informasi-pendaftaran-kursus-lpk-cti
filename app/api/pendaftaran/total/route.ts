import { NextResponse } from 'next/server';
import { getTotalPendaftar } from '@/lib/data';

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const total = await getTotalPendaftar();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total pendaftar:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
