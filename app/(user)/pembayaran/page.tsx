'use client';

import {
    Clock,
    CheckCircle2,
    CreditCard,
    Banknote,
    Calendar,
    FileText
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Tipe untuk pembayaran (minimal sesuai struktur digunakan)
type Pembayaran = {
    id: string;
    status: string;
    method: string;
    amount: number;
    createdAt: string;
    pendaftaran?: {
        kursus?: {
            nama?: string;
        };
    };
};

const RiwayatPembayaranPage = () => {
    const [riwayatPembayaran, setRiwayatPembayaran] = useState<Pembayaran[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPembayaran = async () => {
            try {
                const response = await fetch('/api/transaction/notification/session');
                if (!response.ok) {
                    throw new Error('Gagal mengambil data pembayaran');
                }
                const data = await response.json();
                setRiwayatPembayaran(data.data);
            } catch (err) {
                console.error(err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Terjadi kesalahan tak terduga");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPembayaran();
    }, []);

    const formatMataUang = (jumlah: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(jumlah);
    };

    const formatTanggal = (tanggalString: string): string => {
        const opsi: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(tanggalString).toLocaleDateString('id-ID', opsi);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                    <FileText className="w-6 h-6 mr-3 text-gray-800" />
                    <h1 className="text-2xl sm:text-2xl font-bold text-gray-900">Daftar Pembayaran</h1>
                </div>

                {loading && <div className="flex flex-col items-center justify-center py-12">
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <p className="mt-4 text-gray-500">Memuat daftar pembayaran...</p>
                </div>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        {riwayatPembayaran.length === 0 ? (
                            <p className="p-6 text-center text-gray-600">Tidak ada riwayat pembayaran.</p>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {riwayatPembayaran.map((pembayaran) => (
                                    <div
                                        key={pembayaran.id}
                                        className="px-5 py-5 hover:bg-gray-50 transition-colors duration-150 sm:px-6"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex items-start gap-4 flex-1 min-w-0">
                                                <div className={`p-3 rounded-lg ${pembayaran.status === "berhasil"
                                                    ? "bg-green-50 text-green-600"
                                                    : "bg-yellow-50 text-yellow-600"
                                                    }`}>
                                                    {pembayaran.method === "Kartu Kredit" ? (
                                                        <CreditCard className="h-5 w-5" />
                                                    ) : pembayaran.method === "Transfer Bank" ? (
                                                        <Banknote className="h-5 w-5" />
                                                    ) : (
                                                        <CreditCard className="h-5 w-5" />
                                                    )}
                                                </div>

                                                <div className="min-w-0">
                                                    <h3 className="font-medium text-gray-900 truncate">
                                                        {pembayaran.pendaftaran?.kursus?.nama ?? 'Kursus Tidak Diketahui'}
                                                    </h3>

                                                    <div className="flex items-center mt-2 text-sm">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pembayaran.status === "berhasil" || pembayaran.status === "unpaid"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                            }`}>
                                                            {pembayaran.status === "berhasil" || pembayaran.status === "unpaid" ? (
                                                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                                            ) : (
                                                                <Clock className="h-3 w-3 mr-1" />
                                                            )}
                                                            {pembayaran.status === "unpaid" ? "Berhasil" : pembayaran.status}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center mt-2 text-sm text-gray-500">
                                                        <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
                                                        <span>{formatTanggal(pembayaran.createdAt)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:text-right">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {formatMataUang(pembayaran.amount)}
                                                </div>
                                                <div className="mt-1 text-sm text-gray-500">
                                                    <span className="hidden sm:inline">via </span>
                                                    {pembayaran.method}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RiwayatPembayaranPage;
