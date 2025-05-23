"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { History, FileSearch, BookOpen, CalendarDays, BadgeAlert, ChevronRight, Download, PlusCircle, Info, ArrowRightCircle } from 'lucide-react';
import Link from "next/link";

const RiwayatPendaftaranPage = () => {
    const [riwayatPendaftaran, setRiwayatPendaftaran] = useState([]);

    useEffect(() => {
        const fetchRiwayat = async () => {
            try {
                const response = await axios.get("/api/pendaftaran/riwayat");
                setRiwayatPendaftaran(response.data);
            } catch (error) {
                console.error("Gagal mengambil data riwayat:", error);
            }
        };

        fetchRiwayat();
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen p-4 md:p-8 bg-gray-50 mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <History className="w-6 h-6 text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-800">Riwayat Pendaftaran Kursus</h1>
                    </div>

                    {riwayatPendaftaran.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
                            <FileSearch className="w-12 h-12 text-gray-400 mb-4" />
                            <p className="text-gray-600 mb-2">Tidak ada riwayat pendaftaran</p>
                            <button
                                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                                onClick={() => {/* Add navigation to courses */ }}
                            >
                                <PlusCircle className="w-4 h-4" />
                                Daftar Kursus Sekarang
                            </button>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {riwayatPendaftaran.map((pendaftaran: any) => (
                                <li
                                    key={pendaftaran.id}
                                    className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200 group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <BookOpen className="w-5 h-5 text-blue-500" />
                                                <h3 className="text-lg font-semibold text-gray-800">{pendaftaran.kursus?.nama}</h3>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                                <CalendarDays className="w-4 h-4" />
                                                <span>Tanggal Daftar: {new Date(pendaftaran.createdAt).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm">
                                                <BadgeAlert className="w-4 h-4" />
                                                <span>Status: </span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${pendaftaran.status === 'Diterima' ? 'bg-green-100 text-green-800' :
                                                    pendaftaran.status === 'Belum diverifikasi' ? 'bg-orange-100 text-orange-800' :
                                                        pendaftaran.status === 'Ditolak' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {pendaftaran.status}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            className="text-gray-400 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100"
                                            onClick={() => {/* Add detail view action */ }}
                                            aria-label="Lihat detail"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {pendaftaran.status === 'Lulus' && (
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                <Download className="w-4 h-4" />
                                                Unduh Sertifikat
                                            </button>
                                        </div>
                                    )}

                                    {pendaftaran.status === 'Diterima' && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                                            <Link href={`/pembayaran`}>
                                                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors shadow-sm hover:shadow-md">
                                                    <ArrowRightCircle className="w-4 h-4" />
                                                    Lanjut ke Pembayaran
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                    <div className="mt-4 flex items-start gap-2 p-2 bg-blue-50 rounded-lg">
                                        <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                            {pendaftaran.keterangan || 'Tidak ada keterangan tambahan'}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RiwayatPendaftaranPage;
