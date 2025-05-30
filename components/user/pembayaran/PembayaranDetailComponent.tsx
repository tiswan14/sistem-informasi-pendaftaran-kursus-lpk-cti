/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Script from "next/script";
import { formatRupiah } from "@/utils/formatRupiah";

export interface PembayaranDetailProps {
    id: string;
}

interface User {
    id: string;
    nama: string;
    email: string;
}

interface Kursus {
    id: string;
    nama: string;
    harga: number;
    user: User; // Pengajar
}

interface Pendaftaran {
    id: string;
    userId: string;
    kursusId: string;
    status: string;
    user: User;
    kursus: Kursus;
    Payment: any | null;
}

const PembayaranDetailComponent: React.FC<PembayaranDetailProps> = ({ id }) => {
    const [pendaftaran, setPendaftaran] = useState<Pendaftaran | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [duration, setDuration] = useState<number>(1);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchPendaftaran = async () => {
            try {
                const res = await fetch(`/api/pendaftaran/${id}`);
                if (!res.ok) {
                    throw new Error(`Pendaftaran tidak ditemukan (status ${res.status})`);
                }
                const data = await res.json();
                setPendaftaran(data);
                console.log(data);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Terjadi kesalahan saat mengambil data pendaftaran");
            } finally {
                setLoading(false);
            }
        };

        fetchPendaftaran();
    }, [id]);

    // const handlePayment = async () => {
    //     if (!pendaftaran) return;

    //     setIsProcessingPayment(true);
    //     try {
    //         const response = await fetch("/api/payment", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 courseId: pendaftaran.kursus.id,
    //                 amount: pendaftaran.kursus.harga * duration,
    //                 duration: duration,
    //             }),
    //         });

    //         const data = await response.json();

    //         if (data.paymentUrl) {
    //             window.location.href = data.paymentUrl;
    //         } else if (data.invoiceUrl) {
    //             router.push(data.invoiceUrl);
    //         } else {
    //             throw new Error("Tidak dapat memproses pembayaran");
    //         }
    //     } catch (error) {
    //         setError("Gagal memproses pembayaran. Silakan coba lagi.");
    //         setIsProcessingPayment(false);
    //     }
    // };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
            </div>
        );
    }

    if (!pendaftaran) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">Data pendaftaran tidak ditemukan</div>
            </div>
        );
    }

    const totalAmount = pendaftaran.kursus.harga * duration;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Pembayaran Kursus</h1>
                            <p className="mt-1 text-gray-500">Lengkapi detail pembayaran Anda</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h2 className="text-lg font-medium text-gray-900">Detail Kursus</h2>
                        <div className="mt-4 space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Nama Kursus</span>
                                <span className="text-gray-900 font-medium">{pendaftaran.kursus.nama}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Harga per Bulan</span>
                                <span className="text-gray-900 font-medium">{formatRupiah(pendaftaran.kursus.harga)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="duration" className="text-gray-600">
                                    Durasi (bulan)
                                </label>
                                <input
                                    type="number"
                                    id="duration"
                                    min={1}
                                    max={12}
                                    value={duration}
                                    onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <div className="flex justify-between">
                            <span className="text-lg font-medium text-gray-900">Total Pembayaran</span>
                            <span className="text-xl font-bold text-blue-600">{formatRupiah(totalAmount)}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            // onClick={handlePayment}
                            disabled={isProcessingPayment}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessingPayment ? (
                                <>
                                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    Memproses...
                                </>
                            ) : (
                                "Bayar Sekarang"
                            )}
                        </button>
                    </div>
                    <Script
                        src="https://app.sandbox.midtrans.com/snap/snap.js"
                        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                        strategy="lazyOnload"
                    />
                    {/* Hilangkan tulisan sandbox jika ke production */}

                    <div className="mt-4 text-center text-sm text-gray-500">Pembayaran aman dan terenkripsi</div>
                </div>
            </div>
        </div>
    );
};

export default PembayaranDetailComponent;
