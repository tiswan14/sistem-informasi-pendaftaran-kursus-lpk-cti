import { Metadata } from "next"
import Image from "next/image"
import FormLogin from "@/app/components/auth/form-login"

export const metadata: Metadata = {
    title: "Login | LPK CTI Ciamis",
}
const LoginPage = () => {
    return (
        <div className="p-6 space-y-4">
            <Image src="/logo-lpk-cti.png" alt="Logo LPK CTI Ciamis" width={150} height={150} className="mx-auto"></Image>
            <h1 className="text-2xl text-center font-bold text-gray-900 mb-4">
                Login ke Akun
            </h1>
            <FormLogin />

        </div>
    )
}

export default LoginPage
