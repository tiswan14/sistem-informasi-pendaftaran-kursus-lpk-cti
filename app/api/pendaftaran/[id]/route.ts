import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email"; 

export const dynamic = 'force-dynamic'

// GET handler
export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const pendaftaran = await prisma.pendaftaran.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        nama: true,
                        email: true,
                        noHp: true,
                    }
                },
                kursus: {
                    select: {
                        id: true,
                        nama: true,
                        harga: true,
                        user: {
                            select: {
                                id: true,
                                nama: true,
                            },
                        },
                    },
                },
                Payment: true,
            },
        });

        if (!pendaftaran) {
            return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 });
        }

        return NextResponse.json(pendaftaran);
    } catch (error) {
        console.error('Gagal fetch pendaftaran by ID:', error);
        return NextResponse.json({ error: 'Gagal mengambil data pendaftaran' }, { status: 500 });
    }
}

// PATCH handler

export async function PATCH(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const { status }: { status: string } = await request.json();

        const allowedStatus = ["Menunggu Verifikasi", "Terverifikasi", "Lulus Pelatihan"];

        if (!allowedStatus.includes(status)) {
            return NextResponse.json({ error: "Status tidak valid" }, { status: 400 });
        }

        const updatedPendaftaran = await prisma.pendaftaran.update({
            where: { id },
            data: { status },
            include: {
                user: { select: { email: true, nama: true } },
                kursus: { select: { nama: true } },
            },
        });

        const { user, kursus } = updatedPendaftaran;

        // Kirim email jika status berubah ke Terverifikasi
        if (status === "Terverifikasi") {
            await sendEmail({
                to: user.email,
                subject: `Pendaftaran Anda Telah Diverifikasi`,
                html: `
      <p>Halo <strong>${user.nama}</strong>,</p>
      <p>Pendaftaran Anda untuk kursus <strong>${kursus.nama}</strong> telah <strong>terverifikasi</strong>.</p>
      <p>Silakan segera melakukan pembayaran melalui sistem kami untuk melanjutkan proses pelatihan.</p>
      <p>Anda dapat melihat status dan melakukan pembayaran melalui halaman berikut:</p>
      <p><a href="https://lpk-cti.up.railway.app/riwayat-pendaftaran" target="_blank">🔗 Cek Riwayat Pendaftaran</a></p>
      <br />
      <p>Terima kasih,</p>
      <p><strong>LPK CTI</strong></p>
    `,
            });
        }


        // Kirim email jika status berubah ke Lulus Pelatihan
        if (status === "Lulus Pelatihan") {
            await sendEmail({
                to: user.email,
                subject: `Selamat! Anda Telah Lulus Pelatihan`,
                html: `
      <p>Halo <strong>${user.nama}</strong>,</p>
      <p>Selamat! Anda telah <strong>lulus</strong> dari pelatihan <strong>${kursus.nama}</strong>.</p>
      <p>Terima kasih telah mengikuti pelatihan bersama kami.</p>
      <p>Anda dapat mengunduh sertifikat melalui halaman berikut:</p>
      <p><a href="https://lpk-cti.up.railway.app/sertifikat" target="_blank">🔗 Lihat Sertifikat</a></p>
      <br />
      <p>Salam sukses,</p>
      <p><strong>Tim LPK CTI</strong></p>
    `,
            });
        }


        return NextResponse.json(updatedPendaftaran);
    } catch (error: unknown) {
        console.error("Error:", error);
        const message =
            error instanceof Error ? error.message : "Gagal memperbarui status";
        return NextResponse.json({ error: message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}


// DELETE handler
export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const deletePendaftaran = await prisma.pendaftaran.delete({
            where: { id },
        });
        return NextResponse.json({ deletePendaftaran }, { status: 200 });
    } catch (error) {
        console.error("Error menghapus pendaftaran:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// OPTIONS handler
export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
}
