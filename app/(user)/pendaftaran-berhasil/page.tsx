"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSpinner } from "react-icons/fa";

const PendaftaranBerhasilPage = () => {
    const searchParams = useSearchParams();
    const namaKursus = searchParams.get('namaKursus') || "Kursus";
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <FaSpinner className="animate-spin text-blue-600 text-4xl" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 py-24">
            <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-lg border border-gray-100">
                {/* Success Illustration */}
                <div className="flex justify-center mb-8" data-aos="zoom-in">
                    <div className="relative">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                            <svg
                                className="h-12 w-12 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <div className="absolute -inset-2 border-4 border-green-100 rounded-full animate-ping opacity-75"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800" data-aos="fade-up">
                        Pendaftaran Berhasil!
                    </h1>

                    <div className="space-y-4 text-gray-600" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            Terima kasih telah mendaftar di <span className="font-semibold text-blue-600">{namaKursus}</span>.
                        </p>
                        <p>
                            Pendaftaran Anda telah kami terima dan sedang menunggu proses verifikasi oleh admin.
                        </p>
                        <p className="text-sm bg-blue-50 p-3 rounded-lg text-blue-700">
                            Pendaftaran Anda sedang menunggu konfirmasi dari admin. Silakan periksa halaman riwayat pendaftaran secara berkala untuk mengetahui status terbaru.
                        </p>

                    </div>


                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center pt-4" data-aos="fade-up" data-aos-delay="200">
                        <Link href="/riwayat-pendaftaran" className="flex-1 sm:flex-none">
                            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                                Cek Status
                            </button>
                        </Link>
                        <Link href="/kursus" className="flex-1 sm:flex-none">
                            <button className="w-full px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                                Kursus Lainnya
                            </button>
                        </Link>
                    </div>

                    {/* Additional Help */}
                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                            Butuh bantuan? <Link href="/bantuan" className="text-blue-600 hover:underline">Hubungi kami</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendaftaranBerhasilPage;