import NextAuth from "next-auth"
import { PrismaAdapter } from '@auth/prisma-adapter' // ✅ harus cocok
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const validatedFields = LoginSchema.safeParse(credentials)

                if (!validatedFields.success) {
                    return null
                }

                const { email, password } = validatedFields.data

                const user = await prisma.user.findUnique({ where: { email } })

                if (!user || !user.password) {
                    throw new Error("User tidak ditemukan")
                }

                const passwordMatch = compareSync(password, user.password)

                if (!passwordMatch) return null
                return user
            }
        })
    ],
    // Tambahkan secret di sini
    secret: process.env.JWT_SECRET,  // Pastikan JWT_SECRET ada di file .env
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const role = auth?.user?.role
            const path = nextUrl.pathname

            const ProtectedRoutes = ["/dashboard", "/user", "/"]

            if (!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
                return Response.redirect(new URL("/login", nextUrl))
            }

            if (isLoggedIn && (nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register"))) {
                return Response.redirect(new URL("/", nextUrl))
            }

            if (path.startsWith("/dashboard") && role !== "admin") {
                return Response.redirect(new URL("/", nextUrl))
            }

            if (isLoggedIn && role === "admin" && path === "/") {
                return Response.redirect(new URL("/dashboard", nextUrl))
            }


            return true
        },
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.name = user.nama
            }

            return token
        },
        session({ session, token }) {
            session.user.id = token.sub
            session.user.role = token.role
            session.user.nama = token.nama
            return session
        }
    }
})
