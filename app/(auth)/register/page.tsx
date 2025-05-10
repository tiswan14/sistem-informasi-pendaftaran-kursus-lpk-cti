import Image from "next/image"
import FormRegister from "@/app/components/auth/form-register"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Form Pendaftaran | LPK CTI Ciamis",
}


const RegisterPage = () => {
    return (
        <div className="p-6 space-y-4">
            <Image src="/logo-lpk-cti.png" alt="Logo LPK CTI Ciamis" width={150} height={150} className="mx-auto"></Image>
            <h1 className="text-2xl text-center font-bold text-gray-900 mb-4">
                Daftar ke Akun
            </h1>
            <FormRegister />

        </div>
    )
}

export default RegisterPage
