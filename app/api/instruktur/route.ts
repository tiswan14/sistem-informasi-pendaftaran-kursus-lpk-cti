import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { InstrukturInput } from "@/types/instruktur";
import { hashSync } from "bcrypt-ts";

export const POST = async (request: Request) => {
    try {
        const hashedPassword = hashSync("password", 10)
        const body: InstrukturInput = await request.json();

        const newInstruktur = await prisma.user.create({
            data: {
                ...body,
                password: hashedPassword,
                role: "instruktur"
            }
        })

        return NextResponse.json(newInstruktur, { status: 201 });
    } catch (error) {
        console.error('Error creating instruktur:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


export async function GET() {
    try {
        const instruktur = await prisma.user.findMany({
            where: { role: "instruktur" },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(instruktur);
    } catch (error) {
        console.error("Gagal fetch instruktur:", error);
        return NextResponse.json({ error: "Gagal mengambil data instruktur" }, { status: 500 });
    }
}