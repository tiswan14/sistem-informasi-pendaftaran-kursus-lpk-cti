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
        email,
        password,
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
                email,
                password: hashedPassword,
            },
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message }
        }
        return { message: "Terjadi kesalahan saat menyimpan data" }
    }

    return redirect("/login?registered=success")
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
        nama: formData.get("nama")?.toString().trim() ?? "",
        nik: formData.get("nik")?.toString().trim() ?? "",
        jenisKelamin: formData.get("jenisKelamin")?.toString().trim() ?? "",
        noHp: formData.get("noHp")?.toString().trim() ?? "",
        email: formData.get("email")?.toString().trim() ?? "",
        keahlian: formData.get("keahlian")?.toString().trim() ?? "",
        jabatan: formData.get("jabatan")?.toString().trim() ?? "",
        password: formData.get("password")?.toString() ?? "",
    };

    const validateFields = InstrukturSchema.safeParse(rawData);

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
        };
    }

    try {
        const hashedPassword = hashSync(validateFields.data.password, 10)
        await prisma.user.create({
            data: {
                ...validateFields.data,
                password: hashedPassword,
                role: "instruktur"
            },
        })
    } catch (error) {
        console.error(error);
        return { message: "Terjadi kesalahan saat menyimpan data instruktur." };
    }

    redirect("/dashboard/data-instruktur")
}