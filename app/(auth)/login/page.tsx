
import { Metadata } from "next";
import Image from "next/image";
import FormLogin from "@/components/auth/form-login";
import GoogleButton from "@/components/auth/google-button";
export const metadata: Metadata = {
    title: "Login | LPK CTI Ciamis",
};

const LoginPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-[500px] bg-white rounded-lg shadow p-6 space-y-4">
                <Image
                    src="/logo-lpk-cti.png"
                    alt="Logo LPK CTI Ciamis"
                    width={150}
                    height={150}
                    className="mx-auto py-3"
                />
                <h1 className="text-2xl text-center font-bold text-gray-900 mb-4">
                    Login ke Akun
                </h1>
                <FormLogin />
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex-1 border-t border-gray-300" />
                    <span className="">atau</span>
                    <div className="flex-1 border-t border-gray-300" />
                </div>
                <GoogleButton />
            </div>
        </div>
    );
};

export default LoginPage;
