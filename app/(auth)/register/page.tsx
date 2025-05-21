import Image from "next/image";
import FormRegister from "@/components/auth/form-register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Form Pendaftaran | LPK CTI Ciamis",
};

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-[550px] bg-white rounded-lg shadow">
                <div className="p-6 space-y-4">
                    <div className="w-full max-w-md mx-auto">
                        <Image
                            src="/logo-lpk-cti.png"
                            alt="Logo LPK CTI Ciamis"
                            width={150}
                            height={150}
                            className="mx-auto"
                        />
                        <h1 className="text-2xl text-center font-bold text-gray-900 py-4">
                            Daftar ke Akun
                        </h1>
                        <FormRegister />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
