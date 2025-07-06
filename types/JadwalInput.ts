export interface JadwalInput {
    kursusId: string;
    deskripsi?: string | null;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    ruangan?: string | null;
    status?: string;
}
