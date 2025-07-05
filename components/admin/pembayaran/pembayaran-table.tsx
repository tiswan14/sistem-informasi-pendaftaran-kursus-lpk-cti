"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { formatRupiah } from "@/utils/formatRupiah";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import renderStatus from "@/utils/renderStatus";
import { toast } from "react-toastify";

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
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

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
                } else {
                    console.error("API responded with success=false", responseJson);
                    throw new Error("Response API gagal");
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error("Error caught in fetchPembayaran:", error.message);
                } else {
                    console.error("Error caught in fetchPembayaran:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPembayaran();
    }, []);

    const handleDeleteClick = (id: string) => {
        console.log('Setting selectedId:', id); // Debug log
        setSelectedId(id);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        if (!selectedId) {
            console.error('No selected ID for deletion');
            return;
        }

        console.log('Attempting to delete payment with ID:', selectedId);

        try {
            console.log('Making DELETE request to:', `/api/pembayaran/${selectedId}`);
            const response = await fetch(`/api/pembayaran/${selectedId}`, {
                method: 'DELETE',
            });

            console.log('Delete response status:', response.status);

            if (!response.ok) {
                const errorResponse = await response.text();
                console.error('Delete failed with response:', errorResponse);
                throw new Error(`Delete failed with status ${response.status}`);
            }

            console.log('Delete successful, updating state...');
            setPembayaranData(prev => {
                const newData = prev.filter(item => item.id !== selectedId);
                console.log('New data after deletion:', newData);
                return newData;
            });

            toast.success('Pembayaran berhasil dihapus');
        } catch (error) {
            console.error('Error in handleDeleteConfirm:', error);
            toast.error('Gagal menghapus pembayaran');
        } finally {
            setShowDeleteModal(false);
            setSelectedId(null);
        }
    };
    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
        setSelectedId(null);
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
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
                            <td colSpan={8} className="text-center py-12">
                                <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                    </svg>
                                    <h3 className="text-lg font-medium">Tidak Ada Data Pembayaran</h3>
                                    <p className="text-sm max-w-md">Belum ada riwayat pembayaran yang tercatat</p>
                                </div>
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
                                <td className="px-0 py-4 whitespace-nowrap capitalize">
                                    {renderStatus(pembayaran.status)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button
                                        onClick={() => handleDeleteClick(pembayaran.id)}
                                        className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer mx-auto"
                                        aria-label="Hapus"
                                    >
                                        <FaTrash className="h-4 w-4 text-white" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedId && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Penghapusan</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus pembayaran ini?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={handleDeleteCancel}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PembayaranTable;