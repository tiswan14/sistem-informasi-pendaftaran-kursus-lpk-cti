export interface JadwalInput {
    kursusId: string;
    deskripsi?: string | null;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    lokasi?: string | null;
    ruangan?: string | null;
    status?: string;
}
