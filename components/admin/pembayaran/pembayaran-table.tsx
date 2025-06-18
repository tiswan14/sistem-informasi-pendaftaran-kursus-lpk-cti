"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { formatRupiah } from "@/utils/formatRupiah";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import renderStatus from "@/utils/renderStatus";



type User = {
    nama: string;
};

type Kursus = {
    nama: string;
};

type Pendaftaran = {
    user: User;
    kursus: Kursus;
};

type Pembayaran = {
    id: string;
    method: string;
    amount: number;
    waktuBayar?: string | null;
    status: string;
    pendaftaran: Pendaftaran;
    createdAt: string;
};


const PembayaranTable = () => {
    const [pembayaranData, setPembayaranData] = useState<Pembayaran[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        const fetchPembayaran = async () => {
            try {
                const res = await fetch("/api/transaction/notification");
                if (!res.ok) {
                    console.error("Fetch error: response not ok", res.status, res.statusText);
                    throw new Error(`Gagal memuat data pembayaran: ${res.status} ${res.statusText}`);
                }

                const responseJson: { success: boolean; data: Pembayaran[] } = await res.json();

                if (responseJson.success) {
                    setPembayaranData(responseJson.data);
                    console.log("Data pembayaran berhasil diterima:", responseJson.data); // <-- ini yang kamu minta
                } else {
                    console.error("API responded with success=false", responseJson);
                    throw new Error("Response API gagal");
                }
            } catch (error: any) {
                console.error("Error caught in fetchPembayaran:", error.message || error);
            } finally {
                setLoading(false);
            }
        };

        fetchPembayaran();
    }, []);





    const handleDelete = (id: string) => {
        setPembayaranData(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Pendaftar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Kursus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metode</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waktu Bayar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={8} className="py-10 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-transparent border-r-transparent"></div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-600">
                                            Memuat data pembayaran
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Harap tunggu sebentar...
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : !pembayaranData.length ? (
                        <tr>
                            <td colSpan={8} className="text-center py-10 text-gray-400 italic">
                                Tidak ada data pembayaran
                            </td>
                        </tr>
                    ) : (
                        pembayaranData.slice(0, 6).map((pembayaran, index) => (
                            <tr key={pembayaran.id ?? index}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pembayaran.pendaftaran.user.nama}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pembayaran.pendaftaran.kursus.nama}</td>
                                <td className="px-6 py-4 whitespace-nowrap capitalize">
                                    {pembayaran.method.replace('_', ' ')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatRupiah(pembayaran.amount)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {pembayaran.createdAt ? formatTanggalIndonesia(pembayaran.createdAt) : '-'}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap capitalize">
                                    {renderStatus(pembayaran.status)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Tooltip content="Hapus">
                                        <button
                                            onClick={() => handleDelete(pembayaran.id)}
                                            className="bg-red-600 hover:bg-red-700 p-2 rounded-md"
                                        >
                                            <FaTrash className="h-4 w-4 text-white" />
                                        </button>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>

        </div>
    );
};

export default PembayaranTable;
