import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { join } from 'path';

export type SertifikatInput = {
    pendaftaranId: string;
    nomor: string;
    fileName?: string;
    fileType?: string;
    fileSize?: number;
}

export async function GET() {
    try {
        const allSertifikat = await prisma.sertifikat.findMany({
            where: {
                pendaftaran: {
                    status: "Lulus"
                }
            },
            include: {
                pendaftaran: {
                    select: {
                        id: true,
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
                tanggalTerbit: 'desc'
            }
        });


        return NextResponse.json(allSertifikat);
    } catch (error) {
        console.error("Gagal fetch sertifikat:", error);
        return NextResponse.json({ error: "Gagal mengambil data sertifikat" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const pendaftaranId = formData.get('pendaftaranId')?.toString();
        const nomor = formData.get('nomor')?.toString();
        const file = formData.get('file') as File | null;

        // Validasi
        if (!pendaftaranId || !nomor) {
            return NextResponse.json(
                { error: "Pendaftaran ID dan nomor sertifikat wajib diisi" },
                { status: 400 }
            );
        }

        // Cek duplikat nomor sertifikat
        if (await prisma.sertifikat.findUnique({ where: { nomor } })) {
            return NextResponse.json(
                { error: "Nomor sertifikat sudah digunakan" },
                { status: 400 }
            );
        }

        // Cek status pendaftaran
        const pendaftaran = await prisma.pendaftaran.findUnique({
            where: { id: pendaftaranId },
            select: { status: true }
        });

        if (!pendaftaran || !['lulus', 'Lulus'].includes(pendaftaran.status)) {
            return NextResponse.json(
                { error: "Pendaftaran tidak ditemukan atau status tidak lulus" },
                { status: 400 }
            );
        }

        // Handle file upload
        let fileData = null;
        if (file && file instanceof File && file.size > 0) {
            const blob = await put(
                `sertifikat/CTI-${nomor}-${Date.now()}`,
                file,
                { access: 'public', contentType: file.type }
            );


            fileData = {
                url: blob.url,
                name: file.name,
                type: file.type,
                size: file.size
            };
        }

        // Buat sertifikat
        const newSertifikat = await prisma.sertifikat.create({
            data: {
                pendaftaranId,
                nomor,
                fileUrl: fileData?.url || null,
                fileName: fileData?.name || null,
                fileType: fileData?.type || null,
                fileSize: fileData?.size || null
            },
            include: {
                pendaftaran: {
                    select: {
                        user: { select: { nama: true, email: true } },
                        kursus: { select: { nama: true } }
                    }
                }
            }
        });

        return NextResponse.json(newSertifikat, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Internal server error" },
            { status: 500 }
        );
    }
}