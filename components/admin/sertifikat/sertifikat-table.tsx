"use client";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface User {
    id: string;
    nama: string;
}

interface Kursus {
    id: string;
    nama: string;
}

interface Sertifikat {
    id: string;
    userId: string;
    kursusId: string;
    nomor: string;
    tanggalTerbit: string;  // ISO string, misal "2025-06-03T08:00:00Z"
    fileUrl?: string | null;
    user?: User | null;
    kursus?: Kursus | null;
}

const dummyData: Sertifikat[] = [
    {
        id: "1",
        userId: "user-1",
        kursusId: "kursus-1",
        nomor: "CERT-2025-001",
        tanggalTerbit: "2025-06-01T08:00:00Z",
        fileUrl: "https://example.com/files/cert-001.pdf",
        user: { id: "user-1", nama: "Andi Saputra" },
        kursus: { id: "kursus-1", nama: "Pemrograman Dasar" },
    },
    {
        id: "2",
        userId: "user-2",
        kursusId: "kursus-2",
        nomor: "CERT-2025-002",
        tanggalTerbit: "2025-06-02T08:00:00Z",
        fileUrl: null,
        user: { id: "user-2", nama: "Sari Lestari" },
        kursus: { id: "kursus-2", nama: "Desain Grafis" },
    },
];

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

const SertifikatTable = () => {
    const [sertifikatData, setSertifikatData] = useState<Sertifikat[]>(dummyData);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const handleDelete = () => {
        if (!deleteId) return;

        setSertifikatData(sertifikatData.filter((sertifikat) => sertifikat.id !== deleteId));
        toast.success("Sertifikat berhasil dihapus");
        setDeleteId(null);
    };

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus data sertifikat ini?</p>
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
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">No</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Nomor Sertifikat</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama User</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Kursus</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Tanggal Terbit</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">File Sertifikat</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {!sertifikatData.length ? (
                        <tr>
                            <td colSpan={7} className="py-10 text-gray-400 italic text-center">
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
                                    <span>Belum ada data sertifikat</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        sertifikatData.map((sertifikat, index) => (
                            <tr key={sertifikat.id} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{sertifikat.nomor}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{sertifikat.user?.nama || "Tidak diketahui"}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{sertifikat.kursus?.nama || "Tidak diketahui"}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{new Date(sertifikat.tanggalTerbit).toLocaleDateString()}</td>
                                <td className="px-4 py-3 text-sm text-blue-600">
                                    {sertifikat.fileUrl ? (
                                        <a href={sertifikat.fileUrl} target="_blank" rel="noopener noreferrer" className="underline">
                                            Lihat File
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700">
                                    <div className="flex justify-start space-x-2">
                                        <Tooltip content="Edit">
                                            <button
                                                onClick={() => alert(`Edit sertifikat nomor ${sertifikat.nomor}`)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors"
                                            >
                                                <FaEdit className="w-4 h-4 text-white" />
                                            </button>
                                        </Tooltip>
                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(sertifikat.id)}
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

export default SertifikatTable;
