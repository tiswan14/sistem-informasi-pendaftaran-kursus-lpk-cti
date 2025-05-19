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

export const getTotalKursus = async () => {
    try {
        const total = await prisma.kursus.count()
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

export const getInstruktur = async () => {
    try {
        const result = await prisma.user.findMany({
            where: {
                role: "instruktur"
            },
            orderBy: {
                nama: "asc"
            }
        })
        return result
    } catch (error) {
        console.log(error);
        throw new Error("Terjadi kesalahan server")
    }
}



export interface KursusWithUser {
    id: string;
    nama: string;
    harga: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        nama: string;
    } | null;
}

export const getKursusById = async (id: string): Promise<KursusWithUser> => {
    if (!id || typeof id !== 'string') {
        throw new Error('ID kursus tidak valid');
    }

    try {
        const result = await prisma.kursus.findUnique({
            where: { id },
            select: {
                id: true,
                nama: true,
                harga: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
                user: {
                    select: {
                        id: true,
                        nama: true
                    }
                }
            }
        });

        if (!result) {
            throw new Error(`Kursus dengan ID ${id} tidak ditemukan`);
        }

        return result;
    } catch (error) {
        console.error('Error fetching kursus:', error);
        throw error;
    }
};