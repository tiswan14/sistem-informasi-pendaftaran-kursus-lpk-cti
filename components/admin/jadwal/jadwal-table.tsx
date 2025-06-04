"use client";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

interface Jadwal {
    id: string;
    kursusId: string;
    instrukturId?: string | null;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    lokasi?: string | null;
    ruangan?: string | null;
    status: string;
    instruktur?: {
        nama: string;
    } | null;
    kursus: {
        nama: string;
    };
}

const Tooltip = ({
    content,
    children,
}: {
    content: string;
    children: React.ReactNode;
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
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

const JadwalTable = () => {
    const [jadwalData, setJadwalData] = useState<Jadwal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        const fetchJadwal = async () => {
            try {
                const res = await fetch("/api/jadwal");
                if (!res.ok) throw new Error("Gagal memuat data jadwal");
                const data: Jadwal[] = await res.json();
                setJadwalData(data);
            } catch (error) {
                console.error("Error:", error);
                toast.error("Gagal memuat data jadwal");
            } finally {
                setLoading(false);
            }
        };

        fetchJadwal();
    }, []);

    const handleDelete = async () => {
        if (!deleteId) return;

        try {
            const res = await fetch(`/api/jadwal/${deleteId}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Gagal menghapus jadwal");
            }

            toast.success("Jadwal berhasil dihapus");
            setJadwalData(jadwalData.filter(jadwal => jadwal.id !== deleteId));
            setDeleteId(null);
        } catch (error) {
            toast.error("Gagal menghapus jadwal");
            console.error("Error:", error);
        }
    };

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus data jadwal ini?</p>
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

            <table className="w-full divide-y divide-gray-200 text-left">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">No</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Hari</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Nama Kursus</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Instruktur</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Lokasi</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Ruangan</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Jam Mulai</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Jam Selesai</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Status</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={9} className="py-10 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-transparent border-r-transparent"></div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-600">
                                            Memuat data jadwal
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Harap tunggu sebentar...
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : !jadwalData.length ? (
                        <tr>
                            <td colSpan={10} className="py-10 text-gray-400 italic text-center">
                                <div className="flex flex-col items-center justify-center space-y-2">
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
                                    <span>Belum ada data jadwal</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        jadwalData.map((jadwal, index) => (
                            <tr key={jadwal.id} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.hari}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.kursus.nama}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.kursus.user.nama || 'Belum ditentukan'}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.lokasi || '-'}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.ruangan || '-'}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.jamMulai}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{jadwal.jamSelesai}</td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                        ${jadwal.status === 'aktif'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}>
                                        {jadwal.status === 'aktif' ? 'Aktif' : 'Nonaktif'}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700">
                                    <div className="flex justify-start space-x-2">
                                        <Tooltip content="Edit">
                                            <button
                                                onClick={() => redirect(`/dashboard/data-jadwal/edit/${jadwal.id}`)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors"
                                            >
                                                <FaEdit className="w-4 h-4 text-white" />
                                            </button>
                                        </Tooltip>
                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(jadwal.id)}
                                                className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors"
                                            >
                                                <FaTrash className="w-4 h-4 text-white" />
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

export default JadwalTable;