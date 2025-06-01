import createTransaction from "@/lib/transaction";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const payload = await req.json();
        console.log("Payload:", payload);

        const params = {
            transaction_details: {
                order_id: `order-kursus-${Date.now()}`,
                gross_amount: payload.transaction.total,
            },
            customer_details: {
                first_name: payload.user.fullname,
                email: payload.user.email,
                phone: payload.user.phone,
            },
        };

        const transaction = await createTransaction(params);
        console.log("Transaction:", transaction);

        return NextResponse.json({ data: transaction });
    } catch (error) {
        console.error("Gagal membuat transaksi:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan saat membuat transaksi" },
            { status: 500 }
        );
    }
}
