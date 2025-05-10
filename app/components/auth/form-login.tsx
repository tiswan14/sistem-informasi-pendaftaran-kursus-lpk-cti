"use client"
import { useActionState, useState, useEffect } from "react"
import Link from "next/link"
import { LoginCredentials } from "@/lib/action"
import ButtonAuth from "@/app/components/button"
const FormLogin = () => {
    const [state, formAction] = useActionState(LoginCredentials, null)

    const [showMessage, setShowMessage] = useState(!!state?.message);

    useEffect(() => {
        if (state?.message) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 2000); // 3 detik
            return () => clearTimeout(timer);
        }
    }, [state?.message]);
    return (
        <form action={formAction} className="space-y-6">
            {showMessage && (
                <div
                    className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 transition-opacity duration-300"
                    role="alert"
                >
                    <span>{state?.message}</span>
                </div>
            )}


            {/* Field Email */}
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Masukkan email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 
                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <div aria-live="polite" aria-atomic="true">
                    {/* Menampilkan pesan error statis */}
                    <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
                </div>
            </div>

            {/* Field Password */}
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Masukkan password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 
                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <div aria-live="polite" aria-atomic="true">
                    {/* Menampilkan pesan error statis */}
                    <span className="text-sm text-red-500 mt-2">{state?.error?.password}</span>
                </div>
            </div>

            <ButtonAuth type="submit" label="Login" />

            <p className="text-sm text-center font-light text-gray-500">
                Belum punya akun?
                <Link href="/register">
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-800 hover:underline transition duration-200 cursor-pointer">
                        Register
                    </span>
                </Link>
            </p>
        </form>

    )
}

export default FormLogin
