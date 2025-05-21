import { object, string } from 'zod';

export const RegisterSchema = object({
    nama: string()
        .min(3, "Nama harus terdiri dari minimal 3 karakter")
        .max(50, "Nama tidak boleh lebih dari 50 karakter"),
    email: string()
        .email("Format email tidak valid"),
    password: string()
        .min(6, "Password harus terdiri dari minimal 6 karakter")
        .max(50, "Password tidak boleh lebih dari 50 karakter"),
    confirmPassword: string()
        .min(6, "Konfirmasi password minimal 6 karakter")
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password dan konfirmasi password tidak cocok',
})

export const LoginSchema = object({
    email: string().email("Format email tidak valid"),
    password: string().min(6, "Password tidak boleh kosong"),
})


export const InstrukturSchema = object({
    nama: string()
        .min(3, "Nama minimal 3 karakter")
        .max(50, "Nama maksimal 50 karakter"),

    nik: string()
        .length(3, "NIK harus 16 digit")
        .regex(/^\d+$/, "NIK hanya boleh angka"),

    jenisKelamin: string()
        .min(1, "Jenis kelamin harus dipilih"),

    noHp: string()
        .min(2, "Nomor HP minimal 10 digit")
        .max(15, "Nomor HP maksimal 15 digit")
        .regex(/^\d+$/, "Nomor HP hanya boleh angka"),

    email: string()
        .email("Format email tidak valid"),

    keahlian: string()
        .min(1, "Keahlian harus dipilih"),

    jabatan: string()
        .min(1, "Jabatan harus dipilih"),

    password: string()
        .min(6, "Password minimal 6 karakter")
        .max(50, "Password maksimal 50 karakter"),
});