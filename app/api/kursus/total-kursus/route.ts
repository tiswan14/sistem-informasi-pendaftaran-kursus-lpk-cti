import { NextResponse } from 'next/server';
import { getTotalKursus } from '@/lib/data';

export async function GET() {
    try {
        const total = await getTotalKursus();
        return NextResponse.json({ total });
    } catch (error) {
        console.error('Error getting total kursus:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
