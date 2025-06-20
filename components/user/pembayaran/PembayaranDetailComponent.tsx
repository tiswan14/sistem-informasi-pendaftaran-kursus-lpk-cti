
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BadgeDollarSign, CalendarClock, CreditCard, FileText, Loader2 } from "lucide-react";
import Script from "next/script";
import { formatRupiah } from "@/utils/formatRupiah";
import transactionServices from "@/app/services/transaction";

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
    const totalAmount = pendaftaran.kursus.harga * duration;

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
                src="https://app.sandbox.midtrans.com/snap/snap.js"
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
                                <p className="mt-1 text-sm text-gray-500">Lengkapi detail pembayaran Anda</p>
                            </div>
                        </div>

                        {/* Course Details Section */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="bg-blue-50 p-1.5 rounded-lg">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                </div>
                                <h2 className="text-lg font-semibold text-gray-800">Detail Kursus</h2>
                            </div>

                            <div className="space-y-3.5 text-sm">
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">Nama Kursus</span>
                                    <span className="text-gray-800 font-medium">{pendaftaran.kursus.nama}</span>
                                </div>

                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">Harga per Bulan</span>
                                    <span className="text-gray-800 font-medium">{formatRupiah(pendaftaran.kursus.harga)}</span>
                                </div>

                                <div className="flex justify-between items-center py-2">
                                    <label htmlFor="duration" className="flex items-center text-gray-600">
                                        <CalendarClock className="w-4 h-4 mr-2 text-blue-500" />
                                        Durasi (bulan)
                                    </label>
                                    <input
                                        type="number"
                                        id="duration"
                                        min={1}
                                        max={12}
                                        value={duration}
                                        onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Total Payment Section */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex justify-between items-center bg-blue-50 rounded-lg p-4">
                                <div className="flex items-center space-x-3">
                                    <span className="font-semibold text-gray-800">Total Pembayaran</span>
                                </div>
                                <span className="text-xl font-bold text-blue-600 md:text-2xl">
                                    {formatRupiah(totalAmount)}
                                </span>
                            </div>
                        </div>

                        {/* Payment Button */}
                        <div className="mt-8">
                            <button
                                onClick={() => handlePayment()}
                                disabled={isProcessingPayment}
                                className="w-full flex justify-center items-center space-x-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isProcessingPayment ? (
                                    <>
                                        <Loader2 className="animate-spin h-5 w-5" />
                                        <span>Memproses...</span>
                                    </>
                                ) : (
                                    "Bayar Sekarang"
                                )}
                            </button>
                        </div>

                        {/* Midtrans Info */}
                        <Script
                            src="https://app.sandbox.midtrans.com/snap/snap.js"
                            data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                            strategy="lazyOnload"
                        />

                        <p className="mt-4 text-center text-xs text-gray-400">
                            Transaksi aman & terenkripsi oleh Midtrans
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PembayaranDetailComponent;
