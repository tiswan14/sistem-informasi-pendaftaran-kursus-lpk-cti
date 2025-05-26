export interface Profile {
    // Biodata Pribadi
    nama: string;
    nik?: string;
    jenisKelamin?: string;
    tempatLahir?: string;
    tanggalLahir?: string;
    agama?: string;

    // Kontak
    email: string;
    noHp?: string;
    mediaSosial?: string;

    // Akademik
    jurusan?: string;
    tahunAkademik?: string;
    keahlian?: string;

    // Sistem/User Info
    role: string;
    image?: string;
    createdAt: string;
}
