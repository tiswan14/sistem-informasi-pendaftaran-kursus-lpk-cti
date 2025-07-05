"use client";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import { useEffect, useState } from "react";
import { BookOpen, User, MessageCircleMore, CalendarDays, Clock3, CalendarCheck2, Banknote, Lightbulb, Laptop2 } from 'lucide-react';
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { Kursus, KursusDetailProps } from '@/types/kursus';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const KursusDetail: React.FC<KursusDetailProps> = ({ kursusId }) => {
    const [kursus, setKursus] = useState<Kursus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await fetch(`/api/kursus/${kursusId}`);
                if (!res.ok) {
                    throw new Error(`Kursus tidak ditemukan (status ${res.status})`);
                }



                const data = await res.json();
                console.log(data);

                setKursus(data.kursus);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message || "Terjadi kesalahan saat mengambil data peserta");
                } else {
                    setError("Terjadi kesalahan saat mengambil data peserta");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchKursus();
    }, [kursusId]);


    const { data: session } = useSession();

    const handleDaftar = async () => {
        if (!session?.user?.id) {
            toast.error("Silakan login terlebih dahulu");

            setTimeout(() => {
                router.push("/login");
            }, 1500);

            return;
        }


        try {
            await axios.post("/api/pendaftaran", {
                userId: session.user.id,
                kursusId: kursus?.id,
            });

            toast.success("Pendaftaran berhasil!\nSilahkan tunggu konfirmasi dari admin");
            router.push("/riwayat-pendaftaran");

        } catch (error) {
            const err = error as { response?: { data?: { message?: string } } };

            const message = err.response?.data?.message;

            if (message) {
                toast.error(message);

                if (message.toLowerCase().includes("profil")) {
                    setTimeout(() => {
                        router.push("/peserta/profile/edit");
                    }, 2000);
                }
            } else {
                toast.error("Gagal daftar kursus");
            }
        }
    };


    const namaKursus = kursus?.nama;
    const pesan = encodeURIComponent(`Halo, saya ingin bertanya tentang kursus ${namaKursus}`);
    const linkWhatsApp = `https://wa.me/6281223638151?text=${pesan}`;



    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                </div>
                <p className="text-gray-600">Memuat Detail Kursus...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                {error}
            </div>
        );
    }

    if (!kursus) {
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                Peserta tidak ditemukan
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
            {/* Thumbnail Section */}
            <div className="relative aspect-video w-full h-48 sm:h-64 md:h-72 lg:h-80 mb-6 md:mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                {kursus.thumbnail ? (
                    <Image
                        src={kursus.thumbnail}
                        alt={`Thumbnail ${kursus.nama}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1024px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                    </div>
                )}
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="space-y-1 sm:space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-blue-600">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">Detail Kursus</span>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {kursus.nama}
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 hover:bg-gray-100 px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors w-full md:w-auto">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-gray-600 truncate">Instruktur</p>
                        <p className="font-medium text-sm sm:text-base truncate">{kursus.user.nama}</p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-6 md:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    Tentang Kursus
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-loose">
                    {kursus.deskripsi}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
                {/* Harga */}
                {/* Harga per Bulan */}
                <div className="p-3 sm:p-4 md:p-5 border rounded-xl bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                            <Banknote className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs sm:text-sm text-gray-500 truncate">Biaya per Bulan</p>
                            <p className="font-bold text-sm sm:text-base truncate">
                                Rp {(kursus.harga).toLocaleString("id-ID")}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Durasi Belajar */}
                <div className="p-3 sm:p-4 md:p-5 border rounded-xl bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                            <Clock3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs sm:text-sm text-gray-500 truncate">Durasi Belajar</p>
                            <p className="font-bold text-sm sm:text-base truncate">
                                {kursus.lamaKursus} bulan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mulai Belajar */}
                <div className="p-3 sm:p-4 md:p-5 border rounded-xl bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                            <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs sm:text-sm text-gray-500 truncate">Mulai Belajar</p>
                            <p className="font-bold text-sm sm:text-base truncate">
                                {formatTanggalIndonesia(kursus.tanggalMulai)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Selesai Pada */}
                <div className="p-3 sm:p-4 md:p-5 border rounded-xl bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                            <CalendarCheck2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs sm:text-sm text-gray-500 truncate">Selesai Pada</p>
                            <p className="font-bold text-sm sm:text-base truncate">
                                {formatTanggalIndonesia(kursus.tanggalSelesai)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                    onClick={handleDaftar}
                    className="cursor-pointer flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
                >
                    <Laptop2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Daftar Kursus</span>
                </button>

                <Link
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white text-gray-800 font-medium rounded-lg sm:rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                    <MessageCircleMore className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Tanya Tentang Kursus</span>
                </Link>


            </div>
        </div>
    );
};

export default KursusDetail;