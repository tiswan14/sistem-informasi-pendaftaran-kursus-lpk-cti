import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const pendaftaran = await prisma.pendaftaran.findMany({
            where: {
                user: { email: session.user.email },
            },
            include: {
                kursus: true,
                user: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(pendaftaran);

    } catch (error) {
        console.error("Error getting pendaftaran:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
