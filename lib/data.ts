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