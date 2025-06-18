export interface User {
    id: string;
    nama: string;
}

export interface Kursus {
    id: string;
    nama: string;
    deskripsi: string;
    harga: number;
    lamaKursus: number;
    tanggalMulai: Date;
    tanggalSelesai: Date;
    userId: string;
    user: User;
    thumbnail: string;
}

export interface KursusDetailProps {
    kursusId: string;
}
