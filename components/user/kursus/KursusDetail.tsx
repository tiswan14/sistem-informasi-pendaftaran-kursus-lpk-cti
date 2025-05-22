// file: components/user/kursus/KursusDetail.tsx
"use client";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import React, { useEffect, useState } from "react";
import { BookOpen, User, BookmarkPlus, MessageCircleMore, CalendarDays, Clock3, IndianRupee, CalendarCheck2 } from 'lucide-react';
import { useSession } from "next-auth/react";
import axios from "axios";
interface Kursus {
    id: string;
    nama: string;
    deskripsi: string;
    harga: number;
    lamaKursus: number;
    tanggalMulai: Date;
    tanggalSelesai: Date;
    userId: string;
    user: {
        id: string;
        nama: string;
    }
}

interface KursusDetailProps {
    kursusId: string;
}

const KursusDetail: React.FC<KursusDetailProps> = ({ kursusId }) => {
    const [kursus, setKursus] = useState<Kursus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await fetch(`/api/kursus/${kursusId}`);
                if (!res.ok) {
                    throw new Error(`Kursus tidak ditemukan (status ${res.status})`);
                }

                const data = await res.json();
                setKursus(data.kursus);
            } catch (err: any) {
                setError(err.message || "Terjadi kesalahan saat mengambil data peserta");
            } finally {
                setLoading(false);
            }
        };

        fetchKursus();
    }, [kursusId]);


    const { data: session } = useSession();

    const handleDaftar = async () => {
        if (!session?.user?.id) {
            alert("Silahkan login terlebih dahulu");
            return;
        }
        try {
            const response = await axios.post("/api/pendaftaran", {
                userId: session.user.id,
                kursusId: kursus?.id,
            })
            alert(response.data);
        } catch (error) {
            console.log(error);
            alert("Terjadi kesalahan saat mendaftar kursus");

        }
    }



    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-medium">Kursus</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">{kursus.nama}</h1>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
                    <User className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-sm text-gray-600">Instruktur</p>
                        <p className="font-medium">{kursus.user.nama}</p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Tentang Kursus
                </h3>
                <p className="text-gray-700 leading-relaxed">{kursus.deskripsi}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 border rounded-xl bg-white hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                            <IndianRupee className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Harga</p>
                            <p className="font-bold text-lg">Rp{kursus.harga.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 border rounded-xl bg-white hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                            <Clock3 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Durasi Belajar</p>
                            <p className="font-bold text-lg">{kursus.lamaKursus} bulan</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 border rounded-xl bg-white hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                            <CalendarDays className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Mulai Belajar</p>
                            <p className="font-bold text-lg">{formatTanggalIndonesia(kursus.tanggalMulai)}</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 border rounded-xl bg-white hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                            <CalendarCheck2 className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Selesai Pada</p>
                            <p className="font-bold text-lg">{formatTanggalIndonesia(kursus.tanggalSelesai)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleDaftar}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                    <BookmarkPlus className="w-5 h-5" />
                    <span>Daftar Sekarang</span>
                </button>

                <button
                    className="flex-1 py-4 px-6 bg-white text-gray-800 font-medium rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                    onClick={() => alert('Tanya tentang kursus ini')}
                >
                    <MessageCircleMore className="w-5 h-5" />
                    <span>Tanya Tentang Kursus</span>
                </button>
            </div>
        </div>
    );
};

export default KursusDetail;