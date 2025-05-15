import { object, string, optional } from 'zod';

export const RegisterSchema = object({
    nama: string().min(3, "Nama harus terdiri dari minimal 3 karakter").max(50, "Nama tidak boleh lebih dari 50 karakter"),
    nik: string().min(2, "NIK harus terdiri dari 16 digit").max(16, "NIK harus terdiri dari 16 digit"),
    jenisKelamin: string().min(1, "Jenis kelamin harus dipilih"),
    tempatLahir: string().min(1, "Tempat lahir harus diisi"),
    tanggalLahir: string().min(1, "Tanggal lahir harus diisi"),
    mediaSosial: optional(string()),
    noHp: string().min(3, "Nomor HP harus terdiri dari minimal 10 digit").max(15, "Nomor HP tidak boleh lebih dari 15 digit"),
    email: string().email("Format email tidak valid"),
    agama: string().min(1, "Agama harus diisi"),
    jurusan: string().min(1, "Jurusan harus dipilih"),
    tahunAkademik: string().min(4, "Tahun akademik harus terdiri dari minimal 4 karakter").max(9, "Tahun akademik tidak boleh lebih dari 9 karakter"),
    password: string().min(6, "Password harus terdiri dari minimal 6 karakter").max(50, "Password tidak boleh lebih dari 50 karakter"),
})

export const LoginSchema = object({
    email: string().email("Format email tidak valid"),
    password: string().min(6, "Password tidak boleh kosong"),
})

export const InstrukturSchema = object({
    nama: string().min(3, "Nama tidak boleh kosong atau kurang dari 3 karakter").max(50, "Nama tidak boleh lebih dari 50 karakter"),
    nik: string().min(2, "NIK harus terdiri dari 16 digit").max(16, "NIK harus terdiri dari 16 digit"),
    jenisKelamin: string().min(1, "Jenis kelamin harus dipilih"),
    noHp: string().min(3, "Nomor HP harus terdiri dari minimal 10 digit").max(15, "Nomor HP tidak boleh lebih dari 15 digit"),
    email: string().email("Format email tidak valid"),
    keahlian: string().min(1, "Keahlian harus di pilih!"),
    jabatan: string().min(1, "Jabatan harus di pilih!"),
    password: string().min(6, "Password harus terdiri dari minimal 6 karakter").max(50, "Password tidak boleh lebih dari 50 karakter"),
})