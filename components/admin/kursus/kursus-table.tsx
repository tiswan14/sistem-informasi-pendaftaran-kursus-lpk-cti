/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { formatRupiah } from "@/utils/formatRupiah";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Kursus {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    id: string;
    nama: string;
    harga: number;
    createdAt: string;
}

const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block">
            <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                {children}
            </div>
            {isVisible && (
                <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
                    {content}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800" />
                </div>
            )}
        </div>
    );
};

const KursusTable = () => {
    const [kursusData, setKursusData] = useState<Kursus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {

        const fetchKursus = async () => {
            try {
                const res = await fetch("/api/kursus");
                if (!res.ok) throw new Error("Gagal memuat data kursus");
                const data: Kursus[] = await res.json();
                setKursusData(data);
                console.log(data);

            } catch (error) {

                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchKursus();
    }, []);

    const handleDelete = async () => {
        if (!deleteId) return;

        try {
            const res = await fetch(`/api/kursus/${deleteId}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Gagal menghapus kursus");
            }



            toast.success("Kursus berhasil dihapus");
            setKursusData(kursusData.filter(kursus => kursus.id !== deleteId));
            setDeleteId(null);
        } catch (error) {
            toast.error(`Gagal menghapus kursus`);
            console.error("Error:", error);
        }
    };



    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus data kursus ini?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDelete}
                                className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kursus</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instruktur</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durasi</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={7} className="py-10 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-transparent border-r-transparent"></div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-600">
                                            Memuat data kursus
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Harap tunggu sebentar...
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : !kursusData.length ? (
                        <tr>
                            <td colSpan={8} className="px-3 py-6 text-center">
                                <div className="flex flex-col items-center justify-center text-gray-400">
                                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-sm">Belum ada data kursus</p>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        kursusData.map((kursus, index) => (
                            <tr key={kursus.id} className="hover:bg-gray-50">
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>

                                <td className="px-2 py-3">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
                                            {kursus.thumbnail ? (
                                                <Image
                                                    src={kursus.thumbnail}
                                                    alt={kursus.nama}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-md object-cover h-full w-full"
                                                />
                                            ) : (
                                                <div className="text-gray-400">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{kursus.nama}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {kursus.user?.nama || '-'}
                                </td>

                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {kursus.lamaKursus} bulan
                                </td>

                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex flex-col">
                                        <span>{formatTanggalIndonesia(kursus.tanggalMulai)}</span>
                                        <span className="text-xs text-gray-400">s/d</span>
                                        <span>{formatTanggalIndonesia(kursus.tanggalSelesai)}</span>
                                    </div>
                                </td>

                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {formatRupiah(kursus.harga)}<span className="text-xs text-gray-400">/bulan</span>
                                </td>

                                <td className="px-3 py-3 whitespace-nowrap">
                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
    ${kursus.status === 'aktif'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'}`}>
                                        {kursus.status === 'aktif' ? 'Aktif' : 'Nonaktif'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-center space-x-3">

                                        {/* Tombol Detail (Biru) */}
                                        <Tooltip content="Detail">
                                            <button
                                                onClick={() => redirect(`/dashboard/data-kursus/detail/${kursus.id}`)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                                aria-label="Detail"
                                            >
                                                <FaEye className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>

                                        {/* Tombol Edit (Cyan) */}
                                        <Tooltip content="Edit">
                                            <button
                                                onClick={() => redirect(`/dashboard/data-kursus/edit/${kursus.id}`)}
                                                className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                                aria-label="Edit"
                                            >
                                                <FaEdit className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>

                                        {/* Tombol Hapus (Merah) */}
                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(kursus.id)}
                                                className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                                aria-label="Hapus"
                                            >
                                                <FaTrash className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>

                                    </div>
                                </td>


                            </tr>
                        ))
                    )}
                </tbody>
            </table>



        </div>
    );
};

export default KursusTable;
