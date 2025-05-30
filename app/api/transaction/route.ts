import createTransaction from "@/lib/transaction";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const params = {
        transactiion_detail: {
            order_id: 'test-123',
            gross_amount: 10000
        }
    }
    try {
        const params = await request.json();
        const transaction = await createTransaction(params);
        console.log(transaction);
        return NextResponse.json(transaction);
    } catch (error) {
        console.error("Gagal membuat transaksi:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan saat membuat transaksi" },
            { status: 500 }
        );
    }
}
