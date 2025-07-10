import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { sendEmail } from "@/lib/email";

export type SertifikatInput = {
    pendaftaranId: string;
    nomor: string;
}

export const dynamic = 'force-dynamic'


export async function GET() {
    try {
        const allSertifikat = await prisma.sertifikat.findMany({
            where: {
                pendaftaran: {
                    status: "Lulus Pelatihan"
                }
            },
            include: {
                pendaftaran: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                nama: true,
                                email: true,
                                tanggalLahir: true
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

        if (!pendaftaranId || !nomor) {
            return NextResponse.json(
                { error: "Pendaftaran ID dan nomor sertifikat wajib diisi" },
                { status: 400 }
            );
        }

        if (await prisma.sertifikat.findUnique({ where: { nomor } })) {
            return NextResponse.json(
                { error: "Nomor sertifikat sudah digunakan" },
                { status: 400 }
            );
        }

        const newSertifikat = await prisma.sertifikat.create({
            data: {
                pendaftaranId,
                nomor,
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

        const { user, kursus } = newSertifikat.pendaftaran;

        await sendEmail({
            to: user.email,
            subject: `Sertifikat Telah Diterbitkan`,
            html: `
  <p>Yth. <strong>${user.nama}</strong>,</p>
  <p>Selamat! Sertifikat Anda untuk program pelatihan <strong>${kursus.nama}</strong> dengan nomor <strong>${nomor}</strong> telah resmi diterbitkan.</p>
  <p>Anda dapat melihat atau mengunduh sertifikat melalui halaman berikut:</p>
 <p><a href="https://kursus-lpkcti.vercel.app/sertifikat" target="_blank">🔗 Riwayat Sertifikat</a></p>
  <br />
  <p>Terima kasih atas partisipasi Anda.</p>
  <p><strong>Salam hormat,</strong><br />LPK CTI</p>
`

        });

        return NextResponse.json(newSertifikat, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Internal server error" },
            { status: 500 }
        );
    }
}

