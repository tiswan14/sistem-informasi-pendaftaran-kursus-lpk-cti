export const runtime = 'nodejs';

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const POST = async (request: Request) => {
    try {
        const data = await request.json();
        const {
            order_id,
            transaction_status,
            payment_type,
            fraud_status,
            status_code,
            gross_amount,
            signature_key,
            transaction_time,
            va_numbers
        } = data;

        if (!order_id || !transaction_status || !payment_type || !gross_amount || !signature_key) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const signaturePayload = order_id + status_code + gross_amount + process.env.MIDTRANS_SERVER_KEY;
        const generatedSignature = crypto.createHash("sha512").update(signaturePayload).digest("hex");

        if (signature_key !== generatedSignature) {
            return NextResponse.json({ error: "Invalid signature key" }, { status: 401 });
        }

        let statusUpdate: string;
        switch (transaction_status) {
            case "capture":
                statusUpdate = fraud_status === "accept" ? "paid" : "pending";
                break;
            case "settlement":
                statusUpdate = "paid";
                break;
            case "cancel":
            case "deny":
            case "expire":
                statusUpdate = "failure";
                break;
            case "pending":
                statusUpdate = "pending";
                break;
            default:
                statusUpdate = "unpaid";
        }

        const updateData: any = {
            method: payment_type,
            status: transaction_status,
            amount: parseFloat(gross_amount),
            updatedAt: new Date()
        };

        if (statusUpdate === "paid") {
            updateData.waktuBayar = transaction_time ? new Date(transaction_time) : new Date();
        }

        if (payment_type === 'bank_transfer' && va_numbers && va_numbers.length > 0) {
            updateData.vaNumber = va_numbers[0].va_number;
            updateData.namaBank = va_numbers[0].bank;
        }

        const updatedPayment = await prisma.payment.update({
            where: { pendaftaranId: order_id },
            data: updateData
        });

        return NextResponse.json({ success: true, data: updatedPayment }, { status: 200 });
    } catch (error: any) {
        if (error.code === "P2025") {
            return NextResponse.json({ error: "Payment record not found" }, { status: 404 });
        }
        return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
    }
};


export async function GET() {
    const payments = await prisma.payment.findMany({
        select: {
            method: true,
            amount: true,
            createdAt: true,
            status: true,
            pendaftaran: {
                select: {
                    user: { select: { id: true, nama: true, email: true } },
                    kursus: { select: { id: true, nama: true } },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: payments }, { status: 200 });
}



