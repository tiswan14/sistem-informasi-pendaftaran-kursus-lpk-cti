"use server"
import { RegisterSchema, LoginSchema, InstrukturSchema } from "./zod"
import { hashSync } from "bcrypt-ts"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export const RegisterCredentials = async (_prevState: unknown, formData: FormData) => {
    const rawData = Object.fromEntries(formData)
    const validateFields = RegisterSchema.safeParse(rawData)

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
        }
    }

    const {
        nama,
        nik,
        jenisKelamin,
        tempatLahir,
        tanggalLahir,
        mediaSosial,
        noHp,
        email,
        password,
        agama,
        jurusan,
        tahunAkademik,
    } = validateFields.data

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        return { message: "Email sudah digunakan" }
    }

    const hashedPassword = hashSync(password, 10)

    try {
        await prisma.user.create({
            data: {
                nama,
                nik,
                jenisKelamin,
                tempatLahir,
                tanggalLahir,
                mediaSosial,
                noHp,
                email,
                password: hashedPassword,
                agama,
                jurusan,
                tahunAkademik,
            },
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message }
        }
        return { message: "Terjadi kesalahan saat menyimpan data" }
    }

    return redirect("/login")
}

export const LoginCredentials = async (prevState: unknown, formData: FormData) => {
    const validateFields = LoginSchema.safeParse(Object.fromEntries(formData));

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validateFields.data;

    try {
        await signIn("credentials", { email, password, redirectTo: "/dashboard" });

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { message: "Email atau password salah" };
                default:
                    return { message: "Email atau password salah" };
            }
        }
        throw error;
    }
};

export const AddInstruktur = async (formData: FormData) => {

    const rawData = {
        nama: formData.get("nama"),
        nik: formData.get("nik"),
        jenisKelamin: formData.get("jenisKelamin"),
        noHp: formData.get("noHp"),
        email: formData.get("email"),
        keahlian: formData.get("keahlian"),
        jabatan: formData.get("jabatan"),
        password: formData.get("password"),
    }


    const validateFields = InstrukturSchema.safeParse(rawData);

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
        };
    }

    const {
        nama,
        nik,
        jenisKelamin,
        noHp,
        email,
        keahlian,
        jabatan,
        password,
    } = validateFields.data

    try {
        const hashedPassword = hashSync(password, 10)
        await prisma.user.create({
            data: {
                nama,
                nik,
                jenisKelamin,
                noHp,
                email,
                keahlian,
                jabatan,
                password: hashedPassword,
                role: "instruktur"
            },
        })
    } catch (error) {
        console.log(error);
    }
    redirect("/dashboard/data-instruktur")
}