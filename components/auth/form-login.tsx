"use client"
import { useActionState, useState, useEffect, startTransition } from "react"
import Link from "next/link"
import { LoginCredentials } from "@/lib/action"
import ButtonAuth from "@/components/button"
import { useRouter } from "next/navigation"

interface FormState {
    success?: boolean
    role?: string
    message?: string
    error?: {
        email?: string
        password?: string
    }
}

const FormLogin = () => {
    const router = useRouter()
    const [state, formAction] = useActionState<FormState>(LoginCredentials, null)
    const [isLoading, setIsLoading] = useState(false)
    const [showMessage, setShowMessage] = useState(!!state?.message)

    useEffect(() => {
        if (state?.success && state.role) {
            startTransition(() => {
                if (state.role === "admin") {
                    router.replace("/dashboard")
                } else {
                    router.replace("/")
                }
            })
        }
        setIsLoading(false)
    }, [state, router])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setShowMessage(false)
        const formData = new FormData(e.currentTarget)

        startTransition(() => {
            formAction(formData)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {showMessage && (
                <div
                    className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 transition-opacity duration-300"
                    role="alert"
                >
                    <span>{state?.message}</span>
                </div>
            )}

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 
                   focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
                </div>
            </div>

            {/* Password Field */}
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 
                   focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    minLength={6}
                />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500 mt-2">{state?.error?.password}</span>
                </div>
            </div>

            <ButtonAuth
                type="submit"
                label="Login"
                isLoading={isLoading}
            />

            <p className="text-sm text-center font-light text-gray-500">
                Belum punya akun?
                <Link href="/register" className="font-medium pl-1 text-blue-600 hover:text-blue-800 hover:underline transition duration-200">
                    Register
                </Link>
            </p>
        </form>
    )
}

export default FormLogin