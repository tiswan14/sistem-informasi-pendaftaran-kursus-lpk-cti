import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const sertifikat = await prisma.sertifikat.findMany({
            where: {
                // Jika Anda ingin filter hanya sertifikat dari user ini, tambahkan kondisi ini:
                pendaftaran: {
                    user: { email: session.user.email }
                }
            },
            include: {
                pendaftaran: {
                    include: {
                        user: {
                            select: {
                                nama: true,
                                email: true
                            }
                        },
                        kursus: {
                            select: {
                                nama: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(sertifikat);

    } catch (error) {
        console.error("Error getting sertifikat:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
