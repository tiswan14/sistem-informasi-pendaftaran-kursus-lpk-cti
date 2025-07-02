"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { redirect } from "next/navigation";
import { Pagination } from "../pagination/Pagination";

interface Instruktur {
    id: number;
    nama: string;
    nik: string;
    jenisKelamin: string;
    noHp: string;
    email: string;
    keahlian: string;
    jabatan: string;
    password: string;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

type InstrukturTableProps = {
    searchQuery: string;
};

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



const InstrukturTable = ({ searchQuery }: InstrukturTableProps) => {
    const [instrukturData, setInstrukturData] = useState<Instruktur[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 5
    });

    useEffect(() => {
        const fetchInstruktur = async () => {
            try {
                const res = await fetch(`/api/instruktur?page=${pagination.currentPage}`);
                if (!res.ok) throw new Error("Gagal memuat data instruktur");

                const data = await res.json();
                setInstrukturData(data.data);

                setPagination(prev => ({
                    ...data.pagination,
                    currentPage: prev.currentPage // hindari reset!
                }));
            } catch (error) {
                console.error("Error:", error);
                toast.error("Gagal memuat data instruktur");
            } finally {
                setLoading(false);
            }
        };

        fetchInstruktur();
    }, [pagination.currentPage]);


    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/instruktur/${id}`);
            toast.success("Instruktur berhasil dihapus");

            // Refresh data after deletion
            const res = await fetch(`/api/instruktur?page=${pagination.currentPage}`);
            if (!res.ok) throw new Error("Gagal memuat data instruktur");

            const data = await res.json();
            setInstrukturData(data.data);
            setPagination(data.pagination);

            setDeleteId(null);
        } catch (error) {
            console.error("Gagal menghapus instruktur:", error);
            toast.error("Gagal menghapus instruktur");
        }
    };

    const handlePageChange = (page: number) => {
        setPagination(prev => ({ ...prev, currentPage: page }));
    };

    const filteredInstruktur = instrukturData.filter((instruktur) =>
        instruktur.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );




    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId !== null && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus data instruktur ini?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => {
                                    if (deleteId !== null) {
                                        handleDelete(deleteId);
                                    }
                                }}
                                className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Jenis Kelamin</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No HP</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jurusan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jabatan</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={6} className="py-10 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-transparent border-r-transparent"></div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-600">
                                            Memuat data instruktur
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Harap tunggu sebentar...
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : !filteredInstruktur.length ? (
                        <tr>
                            <td colSpan={7} className="text-center py-10 text-gray-400 italic">
                                <div className="flex flex-col items-center space-y-2">
                                    <svg
                                        className="w-10 h-10 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 17v-6h13v6M9 17H3v-6h6v6zm0 0V7a2 2 0 012-2h10a2 2 0 012 2v10M9 17h6"
                                        />
                                    </svg>
                                    <span>Tidak ada data instruktur</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        filteredInstruktur.map((instruktur, index) => (
                            <tr
                                key={instruktur.id}
                                className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                            >
                                <td className="px-7 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {(pagination.currentPage - 1) * pagination.itemsPerPage + index + 1}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{instruktur.nama}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${instruktur.jenisKelamin === "Laki-laki"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-pink-100 text-pink-800"
                                            }`}
                                    >
                                        {instruktur.jenisKelamin}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{instruktur.noHp}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{instruktur.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{instruktur.keahlian}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {instruktur.jabatan.startsWith("Instruktur")
                                            ? instruktur.jabatan.replace("Instruktur ", "I. ")
                                            : instruktur.jabatan}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-center space-x-3">

                                        {/* Tombol Detail (Biru) */}
                                        <Tooltip content="Detail">
                                            <button
                                                onClick={() => redirect(`/dashboard/data-instruktur/detail/${instruktur.id}`)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                                aria-label="Detail"
                                            >
                                                <FaEye className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>

                                        {/* Tombol Edit (Cyan) */}
                                        <Tooltip content="Edit">
                                            <button
                                                onClick={() => redirect(`/dashboard/data-instruktur/edit/${instruktur.id}`)}
                                                className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                                aria-label="Edit"
                                            >
                                                <FaEdit className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>

                                        {/* Tombol Hapus (Merah) */}
                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(instruktur.id)}
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

            {pagination.totalPages > 1 && (
                <Pagination pagination={pagination} onPageChange={handlePageChange} />
            )}
        </div>
    );
};

export default InstrukturTable;