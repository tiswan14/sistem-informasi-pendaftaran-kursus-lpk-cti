import { Prisma } from "@prisma/client";

export type pendaftaranProps = Prisma.PendaftaranGetPayload<{
    include: {
        user: {
            select: {
                nama: true;
                email: true;
                noHp: true;
            };
        };
        kursus: {
            select: {
                nama: true;
                deskripsi: true;
            };
        };
        Payment: true;
    };
}>;
