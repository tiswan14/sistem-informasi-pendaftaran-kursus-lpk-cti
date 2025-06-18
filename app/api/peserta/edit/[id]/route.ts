import { hash } from "bcrypt-ts"; // ganti dari hashSync ke hash
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const PUT = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    try {
        if (!params.id) {
            return NextResponse.json(
                { error: "ID peserta tidak valid" },
                { status: 400 }
            );
        }

        const body: Partial<{
            nama: string;
            nik: string;
            jenis_kelamin: string;
            tempat_lahir: string;
            tanggal_lahir: string;
            agama: string;
            jurusan: string;
            tahun_akademik: string;
            no_hp: string;
            email: string;
            media_sosial: string;
            password?: string;
        }> = await request.json();

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "Data update tidak boleh kosong" },
                { status: 400 }
            );
        }

        // Hash password secara async
        if (body.password) {
            body.password = await hash(body.password, 10);
        }

        const updatePeserta = await prisma.user.update({
            where: { id: params.id },
            data: body,
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...pesertaWithoutPassword } = updatePeserta;


        return NextResponse.json(pesertaWithoutPassword, { status: 200 });


    } catch (error: unknown) {
        console.error("Update error:", error);
        const message = error instanceof Error
            ? error.message
            : "Internal server error";

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
};
