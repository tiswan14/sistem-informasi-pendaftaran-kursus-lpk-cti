"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
interface Peserta {
    id: string;
    nama: string;
    email: string;
    jenisKelamin: string;
    jurusan: string;
    tahunAkademik: string;
}

// Tooltip Component
const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
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

const PesertaTable = () => {
    const [pesertaData, setPesertaData] = useState<Peserta[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    // const [editData, setEditData] = useState<Peserta | null>(null);

    useEffect(() => {
        const fetchPeserta = async () => {
            try {
                const res = await fetch("/api/peserta");
                if (!res.ok) throw new Error("Gagal memuat data peserta");
                const data: Peserta[] = await res.json();
                setPesertaData(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPeserta();
    }, []);

    const handleEdit = (id: string) => {
        const pesertaToEdit = pesertaData.find(peserta => peserta.id === id);
        if (pesertaToEdit) {
            // setEditData(pesertaToEdit);
            // Here you would typically open a modal or navigate to edit page
            console.log("Editing:", pesertaToEdit);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/peserta/${id}`);
            toast.success("Peserta berhasil dihapus");

            setTimeout(() => {
                window.location.reload();
            }, 1400);

        } catch (error) {
            console.error("Gagal menghapus Peserta:", error);
            toast.error("Gagal menghapus Peserta");
        }
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }



    if (!pesertaData.length) {
        return (
            <div className="bg-white p-6 mt-6 rounded-2xl shadow-md text-center text-gray-500">
                Tidak ada data peserta
            </div>
        );
    }

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            {/* Delete Confirmation Modal */}
            {deleteId !== null && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-gray-800 shadow-lg">
                        <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>
                        <p className="mb-6">Apakah Anda yakin ingin menghapus data peserta ini?</p>
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
                                        setDeleteId(null);
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
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Jenis Kelamin
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Jurusan
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tahun Akademik
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pesertaData.map((peserta, index) => (
                        <tr
                            key={peserta.id}
                            className="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                        >
                            <td className="px-7 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                    {index + 1}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                    {peserta.nama}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{peserta.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${peserta.jenisKelamin === 'Laki-laki'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-pink-100 text-pink-800'}`}>
                                    {peserta.jenisKelamin}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{peserta.jurusan}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{peserta.tahunAkademik}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-center space-x-3">
                                    <Tooltip content="Detail">
                                        <a
                                            href={`/dashboard/data-peserta/${peserta.id}`}
                                            className="bg-green-600 hover:bg-green-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                            aria-label="Detail"
                                        >
                                            <FaEye className="h-4 w-4 text-white" />
                                        </a>
                                    </Tooltip>

                                    <Tooltip content="Edit">
                                        <button
                                            onClick={() => handleEdit(peserta.id)}
                                            className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                            aria-label="Edit"
                                        >
                                            <FaEdit className="h-4 w-4 text-white" />
                                        </button>
                                    </Tooltip>

                                    <Tooltip content="Hapus">
                                        <button
                                            onClick={() => setDeleteId(peserta.id)}
                                            className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer"
                                            aria-label="Hapus"
                                        >
                                            <FaTrash className="h-4 w-4 text-white" />
                                        </button>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default PesertaTable;