import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";


export async function GET() {
    try {
        const session = await auth();

        // Cek apakah user sudah login (autentikasi)
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Ambil data payment yang berkaitan dengan user yang login
        const payments = await prisma.payment.findMany({
            where: {
                pendaftaran: {
                    user: {
                        email: session.user.email
                    }
                }
            },
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

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
