"use client"
import ButtonAuth from "../button"
import Link from "next/link"
import { useActionState } from "react"
import { RegisterCredentials } from "@/lib/action"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const FormRegister = () => {
    const [state, formAction] = useActionState(RegisterCredentials, null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form action={formAction} className="space-y-6">
            {/* Pesan umum */}
            {state?.message ? (
                <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                    <span>{state?.message}</span>
                </div>
            ) : null}

            {/* Nama */}
            <div>
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan nama lengkap"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.nama}</span>
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" placeholder="contoh@email.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.email}</span>
                </div>
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Buat password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.password}</span>
                </div>
            </div>

            {/* Konfirmasi Password */}
            <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                    Konfirmasi Password
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Ulangi password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.confirmPassword}</span>
                </div>
            </div>

            {/* Tombol Daftar */}
            <ButtonAuth label="Daftar" />

            {/* Link Login */}
            <p className="text-sm text-center font-light text-gray-500">
                Sudah punya akun?
                <Link href="/login">
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-800 hover:underline transition duration-200 cursor-pointer">
                        Login
                    </span>
                </Link>
            </p>
        </form>
    )
}

export default FormRegister
