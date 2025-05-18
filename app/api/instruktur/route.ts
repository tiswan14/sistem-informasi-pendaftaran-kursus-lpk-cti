import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { InstrukturInput } from "@/types/instruktur";
import { hashSync } from "bcrypt-ts";

const ITEM_PER_PAGE = 5;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const offset = (page - 1) * ITEM_PER_PAGE;

    try {
        const totalInstruktur = await prisma.user.count({
            where: { role: "instruktur" },
        });

        const instruktur = await prisma.user.findMany({
            skip: offset,
            take: ITEM_PER_PAGE,
            where: { role: "instruktur" },
            orderBy: { nama: "asc" },
        });

        const totalPages = Math.ceil(totalInstruktur / ITEM_PER_PAGE);

        return NextResponse.json({
            success: true,
            data: instruktur,
            pagination: {
                currentPage: page,
                totalPages,
                totalItems: totalInstruktur,
                itemsPerPage: ITEM_PER_PAGE
            }
        });
    } catch (error) {
        console.error('Error fetching instruktur:', error);
        return NextResponse.json(
            { success: false, error: "Gagal mengambil data instruktur" },
            { status: 500 }
        );
    }
}


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


