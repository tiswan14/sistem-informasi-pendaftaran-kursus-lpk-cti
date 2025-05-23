import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const session = await auth();

        // Pastikan ada session yang aktif
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Cari user berdasarkan email dari session DAN role = "peserta"
        const peserta = await prisma.user.findUnique({
            where: {
                email: session.user.email,
                role: "peserta" // Pastikan role-nya peserta
            }
        });

        // Jika tidak ditemukan atau role bukan peserta
        if (!peserta) {
            return NextResponse.json(
                { error: "Data peserta tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json(peserta);

    } catch (error) {
        console.error("Error getting peserta:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}