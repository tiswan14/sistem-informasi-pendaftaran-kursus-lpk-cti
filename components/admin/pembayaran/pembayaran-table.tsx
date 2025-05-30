"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { formatRupiah } from "@/utils/formatRupiah";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import renderStatus from "@/utils/renderStatus";

const dummyData = [
    {
        id: "1",
        method: "Transfer Bank",
        amount: 250000,
        waktuBayar: "2025-05-29T09:30:00Z",
        status: "paid",
        pendaftaran: {
            user: { nama: "Tiswan Ardiansyah" },
            kursus: { nama: "Dasar-Dasar Data Analytics" },
        },
    },
    {
        id: "2",
        method: "E-Wallet",
        amount: 150000,
        waktuBayar: null,
        status: "unpaid",
        pendaftaran: {
            user: { nama: "Siti Nurhaliza" },
            kursus: { nama: "Pemrograman Python" },
        },
    },
];


const PembayaranTable = () => {
    const [pembayaranData, setPembayaranData] = useState(dummyData);

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
                    {!pembayaranData.length ? (
                        <tr>
                            <td colSpan={8} className="text-center py-10 text-gray-400 italic">
                                Tidak ada data pembayaran
                            </td>
                        </tr>
                    ) : (
                        pembayaranData.map((pembayaran, index) => (
                            <tr key={pembayaran.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pembayaran.pendaftaran.user.nama}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pembayaran.pendaftaran.kursus.nama}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pembayaran.method}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatRupiah(pembayaran.amount)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {formatTanggalIndonesia(pembayaran.waktuBayar)}
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
