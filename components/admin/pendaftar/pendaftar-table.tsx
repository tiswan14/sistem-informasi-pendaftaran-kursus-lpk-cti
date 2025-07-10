"use client";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Pendaftar {
    id: string;
    userId: string;
    kursusId: string;
    status: string;
    tanggalDaftar: string;
    createdAt: string | number | Date;
    keterangan?: string; // ← digunakan di handleSaveNote

    user?: {
        nama: string;
        email: string;
    };

    kursus?: {
        judul?: string; // ← kalau backend ngasih `judul`
        nama?: string;  // ← kalau backend ngasih `nama`
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
    const router = useRouter();
    const [pendaftarData, setPendaftarData] = useState<Pendaftar[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [newStatus, setNewStatus] = useState("");

    const [addNote, setAddNote] = useState(false);
    const [currentId, setCurrentId] = useState<string | null>(null);

    const [keterangan, setKeterangan] = useState("");
    const handleOpenAddNote = (id: string, status: string) => {
        setCurrentId(id);
        setNewStatus(status);
        setKeterangan("");
        setAddNote(true);
    };

    const handleCancel = () => {
        setAddNote(false);
        setCurrentId(null);
        setKeterangan("");
        setNewStatus("");
    };



    useEffect(() => {
        const fetchPendaftar = async () => {
            try {
                const res = await fetch("/api/pendaftaran");
                if (!res.ok) throw new Error("Gagal memuat data pendaftar");
                const data: Pendaftar[] = await res.json();
                setPendaftarData(data);
                console.log(data);

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
            toast.success("Data pendaftaran berhasil dihapus!");
        } catch (error) {
            console.error("Error:", error);
            toast.error("Terjadi kesalahan saat menghapus data.");
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

            setPendaftarData(pendaftarData.map(pendaftar =>
                pendaftar.id === id ? { ...pendaftar, status: newStatus } : pendaftar
            ));

            toast.success('Status berhasil diperbarui');

            if (newStatus === "Lulus Pelatihan") {
                router.push("/dashboard/data-sertifikat/tambah");
            }

        } catch (error) {
            console.error('Error:', error);
            toast.error('Gagal memperbarui status');
        }
    };



    const handleSaveNote = async (id: string) => {
        try {
            const response = await fetch(`/api/pendaftaran/ketarangan/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus, keterangan }),
            });

            if (!response.ok) throw new Error('Gagal memperbarui data');

            // Update state pendaftar jika perlu
            setPendaftarData(prev =>
                prev.map(p => p.id === currentId ? { ...p, status: newStatus, keterangan } : p)
            );

            setAddNote(false);
            setCurrentId(null);
            setKeterangan("");
            setNewStatus("");

            toast.success("Keterangan berhasil di kirimkan")
        } catch (error) {
            console.error(error);
            toast.error('Gagal memperbarui data');
        }
    };


    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {deleteId && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Yakin ingin menghapus data ini?</p>
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


            {addNote && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Tambah Catatan dan Ubah Status</h3>

                        <textarea
                            className="w-full border rounded p-2 mb-4"
                            rows={4}
                            placeholder="Masukkan catatan..."
                            value={keterangan}
                            onChange={(e) => setKeterangan(e.target.value)}
                        />

                        <div className="py-4 whitespace-nowrap text-center">
                            <select
                                title="Ubah status pendaftaran"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                                className={`cursor-pointer px-3 py-1.5 text-xs leading-5 font-semibold rounded-full appearance-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1
      ${newStatus === 'Menunggu Verifikasi'
                                        ? 'bg-gray-100 text-gray-800 focus:ring-gray-400'
                                        : newStatus === 'Terverifikasi'
                                            ? 'bg-yellow-100 text-yellow-800 focus:ring-yellow-500'
                                            : newStatus === 'Lulus Pelatihan'
                                                ? 'bg-indigo-100 text-indigo-800 focus:ring-indigo-500'
                                                : 'bg-white text-gray-600 focus:ring-gray-300'}`}
                            >
                                <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                                <option value="Terverifikasi">Terverifikasi</option>
                                <option value="Lulus Pelatihan">Lulus Pelatihan</option>
                            </select>
                        </div>


                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => currentId && handleSaveNote(currentId)}
                                disabled={!keterangan.trim()}
                                className={`px-4 py-2 rounded-md text-white ${keterangan.trim()
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-blue-300 cursor-not-allowed"
                                    }`}
                            >
                                Simpan
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Kursus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Daftar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={5} className="py-10 text-center">
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-200 border-t-transparent border-r-transparent"></div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-600">
                                            Memuat data pendaftaran
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Harap tunggu sebentar...
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : !pendaftarData.length ? (
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
                                <td className="px-6 py-4 whitespace-nowrap">{pendaftar.user?.email || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pendaftar.kursus?.nama || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {formatTanggalIndonesia(
                                        typeof pendaftar.createdAt === "number"
                                            ? new Date(pendaftar.createdAt)
                                            : pendaftar.createdAt
                                    )}
                                </td>

                                <td className="py-4 whitespace-nowrap text-center">
                                    <div className="relative inline-block">
                                        <select
                                            title="Ubah status pendaftaran"
                                            value={pendaftar.status}
                                            onChange={(e) => handleStatusChange(pendaftar.id, e.target.value)}
                                            className={`cursor-pointer pl-3 pr-8 py-2 text-sm leading-5 font-medium rounded-md border shadow-sm appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1
                ${pendaftar.status === 'Menunggu Verifikasi'
                                                    ? 'bg-gray-50 text-gray-700 border-gray-300 focus:ring-gray-400'
                                                    : pendaftar.status === 'Terverifikasi'
                                                        ? 'bg-yellow-50 text-yellow-700 border-yellow-200 focus:ring-yellow-400'
                                                        : pendaftar.status === 'Lulus Pelatihan'
                                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 focus:ring-indigo-400'
                                                            : 'bg-white text-gray-600 border-gray-300 focus:ring-gray-300'}`}
                                        >
                                            <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                                            <option value="Terverifikasi">Terverifikasi</option>
                                            <option value="Lulus Pelatihan">Lulus Pelatihan</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>



                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex justify-center space-x-3">
                                        {/* <Tooltip content="Tambah Catatan">
                                            <button
                                                onClick={() => handleOpenAddNote(pendaftar.id, pendaftar.status)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
                                                aria-label="Tambah Catatan"
                                            >
                                                <FilePlus className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip> */}
                                        <Tooltip content="Hapus">
                                            <button
                                                onClick={() => setDeleteId(pendaftar.id)}
                                                className="cursor-pointer bg-red-600 hover:bg-red-700 p-2 rounded-md"
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
