"use server"
import { RegisterSchema, LoginSchema } from "./zod"
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