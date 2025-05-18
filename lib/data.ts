import { prisma } from "@/lib/prisma"

export const getTotalPeserta = async () => {
    try {
        const total = await prisma.user.count({
            where: {
                role: "peserta"
            }
        })
        return total
    } catch (error) {
        console.log("Gagal menghitung peserta: ", error);
        return 0
    }
}

export const getTotalInstruktur = async () => {
    try {
        const total = await prisma.user.count({
            where: {
                role: "instruktur"
            }
        })
        return total
    } catch (error) {
        console.log("Gagal menghitung instruktur: ", error);
        return 0
    }
}


export const getPesertaDetailById = async (pesertaId: string) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                id: pesertaId
            }
        })
        return result
    } catch (error) {
        console.log(error);
        throw new Error("Terjadi kesalahan server")

    }
}


export const getInstrukturById = async (id: string) => {
    return await prisma.user.findUnique({
        where: {
            id,
        }
    })
}

export const getKursusById = async (id: string) => {
    return await prisma.kursus.findUnique({
        where: { id },
        include: {
            user: {
                select: {
                    id: true,
                    nama: true,
                },
            },
        },
    });
};
