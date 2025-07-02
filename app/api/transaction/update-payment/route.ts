import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'


export const POST = async (request: Request) => {
    try {
        const data = await request.json();
        console.log("PAYMENT DATA MASUK:", data);

        const {
            order_id,
            status,
            payment_type,
            gross_amount,
            transaction_time,
        } = data;

        if (!order_id || !gross_amount) {
            return NextResponse.json({ error: "order_id atau gross_amount kosong" }, { status: 400 });
        }

        let statusUpdate: string;
        switch (status) {
            case "capture":
            case "settlement":
                statusUpdate = "paid";
                break;
            case "pending":
                statusUpdate = "pending";
                break;
            case "deny":
            case "cancel":
            case "expire":
                statusUpdate = "failure";
                break;
            default:
                statusUpdate = "unpaid";
        }

        const updatedPayment = await prisma.payment.upsert({
            where: { pendaftaranId: order_id },
            update: {
                status: statusUpdate,
                method: payment_type,
                waktuBayar: statusUpdate === "paid" ? new Date() : null,
                amount: parseInt(gross_amount || "0"),
            },
            create: {
                pendaftaranId: order_id,
                status: statusUpdate,
                method: payment_type,
                waktuBayar: statusUpdate === "paid" ? new Date() : null,
                amount: parseInt(gross_amount || "0"),
            },
        });

        console.log(`Manual Payment update: ${order_id}, status: ${statusUpdate}`);
        return NextResponse.json({ success: true, data: updatedPayment }, { status: 200 });

    } catch (error) {
        console.error("Manual update error:", error);
        return NextResponse.json({ error: "Internal Server Error", detail: error }, { status: 500 });
    }
};

