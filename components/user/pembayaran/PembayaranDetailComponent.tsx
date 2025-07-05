
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BadgeDollarSign, CalendarClock, CreditCard, FileText, Loader2 } from "lucide-react";
import Script from "next/script";
import { formatRupiah } from "@/utils/formatRupiah";
import transactionServices from "@/app/services/transaction";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        snap: any;
    }
}
export interface PembayaranDetailProps {
    id: string;
}

interface User {
    id: string;
    nama: string;
    email: string;
    noHp: string;
}

interface Kursus {
    id: string;
    nama: string;
    harga: number;
    tanggalMulai: string;
    tanggalSelesai: string;
    lamaKursus: number;
    user: User; // Pengajar
}

interface Pendaftaran {
    id: string;
    userId: string;
    kursusId: string;
    status: string;
    user: User;
    kursus: Kursus;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Payment: any | null;
}

interface MidtransVaNumber {
    bank: string;
    va_number: string;
}

interface MidtransPaymentResult {
    transaction_id: string;
    transaction_status: string;
    payment_type: string;
    gross_amount: string;
    fraud_status: string;
    status_code: string;
    signature_key: string;
    transaction_time: string;
    va_numbers?: MidtransVaNumber[];
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
    const totalAmount = pendaftaran.kursus.harga * pendaftaran.kursus.lamaKursus;


    const handlePayment = async () => {
        setIsProcessingPayment(true);
        try {
            const payload = {
                user: {
                    fullname: pendaftaran?.user.nama || "",
                    email: pendaftaran?.user.email || "",
                    phone: pendaftaran?.user.noHp || "",
                },
                transaction: {
                    total: totalAmount,
                },
            };

            const { data } = await transactionServices.generateTransaction(payload);

            if (window.snap && data?.token) {
                window.snap.pay(data.token, {
                    onSuccess: async (result: MidtransPaymentResult) => {
                        try {
                            const paymentPayload = {
                                order_id: pendaftaran.id,
                                transaction_id: result.transaction_id,
                                transaction_status: result.transaction_status,
                                payment_type: result.payment_type,
                                gross_amount: result.gross_amount,
                                fraud_status: result.fraud_status,
                                status_code: result.status_code,
                                signature_key: result.signature_key,
                                transaction_time: result.transaction_time,
                                vaNumber: result.va_numbers?.[0]?.va_number || null,
                                namaBank: result.va_numbers?.[0]?.bank || null,
                            };

                            const response = await fetch("/api/transaction/update-payment", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(paymentPayload),
                            });

                            if (!response.ok) {
                                const errorText = await response.text();
                                throw new Error(`Gagal simpan data payment: ${response.status} - ${errorText}`);
                            }
                            router.push("/pembayaran");
                        } catch (err) {
                            console.error("Error simpan data payment:", err);
                        }
                        router.push("/pembayaran");
                    },
                    onPending: (result: MidtransPaymentResult) =>
                        console.log("Menunggu pembayaran", result),
                    onError: (result: MidtransPaymentResult) =>
                        console.error("Error pembayaran", result),
                    onClose: () =>
                        console.log("Popup pembayaran ditutup"),
                });
            } else {
                console.error("Token Midtrans tidak tersedia");
            }
        } catch (error) {
            console.error("Gagal proses pembayaran", error);
        } finally {
            setIsProcessingPayment(false);
        }
    };





    return (
        <>
            <Script
                src="https://app.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                strategy="lazyOnload"
            />


            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="p-6 md:p-8">
                        {/* Header Section */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                                <CreditCard className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-800 md:text-2xl">Pembayaran Kursus</h1>
                                <p className="text-sm text-gray-500 mt-1">Lengkapi pembayaran untuk mengakses kursus</p>
                            </div>
                        </div>

                        {/* Course Details Section */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Detail Kursus
                            </h2>

                            <div className="space-y-3.5 text-sm text-gray-700">
                                <div className="flex justify-between py-2.5 px-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Nama Kursus</span>
                                    <span className="font-medium text-gray-800">{pendaftaran.kursus.nama}</span>
                                </div>

                                <div className="flex justify-between py-2.5 px-3 rounded-lg">
                                    <span className="text-gray-600">Instruktur</span>
                                    <span className="font-medium text-gray-800">{pendaftaran.kursus.user.nama}</span>
                                </div>

                                <div className="flex justify-between py-2.5 px-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Tanggal Mulai</span>
                                    <span className="font-medium text-gray-800">{formatTanggalIndonesia(pendaftaran.kursus.tanggalMulai)}</span>
                                </div>

                                <div className="flex justify-between py-2.5 px-3 rounded-lg">
                                    <span className="text-gray-600">Tanggal Selesai</span>
                                    <span className="font-medium text-gray-800">{formatTanggalIndonesia(pendaftaran.kursus.tanggalSelesai)}</span>
                                </div>

                                <div className="flex justify-between py-2.5 px-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">Harga per Bulan</span>
                                    <span className="font-medium text-gray-800">{formatRupiah(pendaftaran.kursus.harga)}</span>
                                </div>

                                <div className="flex justify-between py-2.5 px-3 rounded-lg">
                                    <span className="flex items-center text-gray-600">
                                        <CalendarClock className="w-4 h-4 mr-2 text-blue-500" />
                                        Durasi Kursus
                                    </span>
                                    <span className="font-medium text-gray-800">{pendaftaran.kursus.lamaKursus} bulan</span>
                                </div>
                            </div>
                        </div>

                        {/* Total Payment Section */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 space-y-3 border border-blue-100">
                                <h3 className="font-semibold text-gray-800 text-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Total Pembayaran
                                </h3>

                                <div className="flex justify-between items-center bg-white/70 py-2 px-3 rounded-lg">
                                    <span className="text-sm text-gray-500">
                                        ({formatRupiah(pendaftaran.kursus.harga)} × {pendaftaran.kursus.lamaKursus} bulan)
                                    </span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {formatRupiah(pendaftaran.kursus.harga * pendaftaran.kursus.lamaKursus)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Button */}
                        <div className="mt-8">
                            <button
                                onClick={() => handlePayment()}
                                disabled={isProcessingPayment}
                                className="w-full flex justify-center items-center space-x-2 py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium rounded-lg shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isProcessingPayment ? (
                                    <>
                                        <Loader2 className="animate-spin h-5 w-5" />
                                        <span>Memproses Pembayaran...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span>Bayar Sekarang</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Midtrans Info */}
                        <Script
                            src="https://app.sandbox.midtrans.com/snap/snap.js"
                            data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                            strategy="lazyOnload"
                        />

                        <div className="mt-4 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-xs text-gray-400">
                                Transaksi aman & terenkripsi oleh Midtrans
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PembayaranDetailComponent;
