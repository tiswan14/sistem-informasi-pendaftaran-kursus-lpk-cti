import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function PATCH(request: Request) {
    try {
        const session = await auth();

        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "No data provided for update" },
                { status: 400 }
            );
        }

        const allowedFields = [
            "nama", "nik", "jenisKelamin", "tempatLahir", "tanggalLahir",
            "agama", "noHp", "mediaSosial", "jurusan",
            "tahunAkademik", "keahlian"
        ];

        const dataToUpdate: { [key: string]: any } = {};
        for (const key of allowedFields) {
            if (body[key] !== undefined) {
                dataToUpdate[key] = body[key];
            }
        }


        if (Object.keys(dataToUpdate).length === 0) {
            return NextResponse.json(
                { error: "No valid fields to update" },
                { status: 400 }
            );
        }

        const updatedUser = await prisma.user.update({
            where: {
                email: session.user.email
            },
            data: dataToUpdate
        });

        return NextResponse.json(updatedUser);

    } catch (error) {
        console.error("Error updating peserta:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
