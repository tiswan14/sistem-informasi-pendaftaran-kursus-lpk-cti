"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const PesertaTable = () => {
    const [pesertaData, setPesertaData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeserta = async () => {
            try {
                const res = await fetch("/api/peserta");
                const data = await res.json();
                setPesertaData(data);
            } catch (error) {
                console.error("Gagal memuat data peserta:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPeserta();
    }, []);

    if (loading) {
        return <div className="p-6">Memuat data peserta...</div>;
    }

    if (!pesertaData.length) {
        return <div className="bg-white p-6 mt-6 rounded-2xl shadow-md">Tidak ada peserta</div>;
    }

    return (
        <div className="bg-white p-6 mt-6 rounded-md shadow-md overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
                <thead className="bg-white text-sm text-gray-700 shadow-sm">
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-left font-semibold">Nama</th>
                        <th className="px-6 py-4 text-left font-semibold">NIK</th>
                        <th className="px-6 py-4 text-left font-semibold">Jenis Kelamin</th>
                        <th className="px-6 py-4 text-left font-semibold">Jurusan</th>
                        <th className="px-6 py-4 text-left font-semibold">Tahun Akademik</th>
                        <th className="px-6 py-4 text-center font-semibold">Aksi</th>
                    </tr>
                </thead>

                <tbody className="text-gray-700 text-sm">
                    {pesertaData.map((peserta) => (
                        <tr key={peserta.id} className="hover:bg-gray-50 transition-colors duration-200">

                            <td className="px-5 py-3 border-b border-gray-200 font-medium">{peserta.nama}</td>
                            <td className="px-5 py-3 border-b border-gray-200">{peserta.nik}</td>
                            <td className="px-5 py-3 border-b border-gray-200">{peserta.jenisKelamin}</td>
                            <td className="px-5 py-3 border-b border-gray-200">{peserta.jurusan}</td>
                            <td className="px-5 py-3 border-b border-gray-200">{peserta.tahunAkademik}</td>
                            <td className="px-5 py-3 border-b border-gray-200">
                                <div className="flex items-center justify-center space-x-3">
                                    <button title="Detail" className="text-blue-600 hover:text-blue-800 transition">
                                        <a href={`/dashboard/data-peserta/${peserta.id}`} className="flex items-center">
                                            <FaEye />
                                        </a>
                                    </button>

                                    <button title="Edit" className="text-yellow-500 hover:text-yellow-600 transition">
                                        <FaEdit />
                                    </button>
                                    <button title="Hapus" className="text-red-500 hover:text-red-600 transition">
                                        <FaTrash />
                                    </button>
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
