"use client";
import { formatRupiah } from "@/utils/formatRupiah";
import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Pendaftar {
    createdAt: string | number | Date;
    id: string;
    userId: string;
    kursusId: string;
    status: string;
    tanggalDaftar: string;
    user?: {
        nama: string;
        email: string;
    };
    kursus?: {
        judul: string;
    };
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



const PendaftarTable = () => {
    const [pendaftarData, setPendaftarData] = useState<Pendaftar[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        const fetchPendaftar = async () => {
            try {
                const res = await fetch("/api/pendaftaran");
                if (!res.ok) throw new Error("Gagal memuat data pendaftar");
                const data: Pendaftar[] = await res.json();
                setPendaftarData(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPendaftar();
    }, []);

    const handleDelete = async () => {
        if (!deleteId) return;

        try {
            const res = await fetch(`/api/pendaftaran/${deleteId}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Gagal menghapus data pendaftaran");

            setPendaftarData(pendaftarData.filter(p => p.id !== deleteId));
            setDeleteId(null);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const response = await fetch(`/api/pendaftaran/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) {
                throw new Error('Gagal memperbarui status');
            }

            // Update local state
            setPendaftarData(pendaftarData.map(pendaftar =>
                pendaftar.id === id ? { ...pendaftar, status: newStatus } : pendaftar
            ));

        } catch (error) {
            console.error('Error:', error);
            toast.error('Gagal memperbarui status');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Yakin ingin menghapus data ini?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Pendaftar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Kursus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Daftar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {!pendaftarData.length ? (
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
                                    <span>Tidak ada data pendaftar</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        pendaftarData.map((pendaftar, index) => (
                            <tr key={pendaftar.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pendaftar.user?.nama || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pendaftar.kursus?.nama || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatRupiah(pendaftar.kursus?.harga) || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{new Date(pendaftar.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <select
                                        value={pendaftar.status}
                                        onChange={(e) => handleStatusChange(pendaftar.id, e.target.value)}
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full appearance-none focus:outline-none focus:ring-1 focus:ring-opacity-50
                                        ${pendaftar.status === 'Belum verifikasi' ? 'bg-gray-100 text-gray-800 focus:ring-gray-500' :
                                                pendaftar.status === 'Diterima' ? 'bg-green-100 text-green-800 focus:ring-green-500' :
                                                    pendaftar.status === 'Ditolak' ? 'bg-red-100 text-red-800 focus:ring-red-500' :
                                                        pendaftar.status === 'Lulus' ? 'bg-indigo-100 text-indigo-800 focus:ring-indigo-500' :
                                                            'bg-yellow-100 text-yellow-800 focus:ring-yellow-500'}`}
                                    >
                                        <option value="Belum verifikasi">Belum verifikasi</option>
                                        <option value="Diterima">Diterima</option>
                                        <option value="Ditolak">Ditolak</option>
                                        <option value="Lulus">Lulus</option>
                                    </select>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex justify-center space-x-3">

                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(pendaftar.id)}
                                                className="bg-red-600 hover:bg-red-700 p-2 rounded-md"
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

export default PendaftarTable;
