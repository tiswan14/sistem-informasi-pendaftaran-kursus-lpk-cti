"use client";

import axios from 'axios';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Instruktur {
    id: string;
    nama: string;
}


const EditKursusPage = () => {
    const { id } = useParams();
    const [kursus, setKursus] = useState(null);
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState(0);
    const [lamaKursus, setLamaKursus] = useState(0);
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [instrukturId, setInstrukturId] = useState('');
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await axios.get(`/api/kursus/${id}`);
                const data = res.data;

                setKursus(data);
                setNama(data.kursus.nama);
                setDeskripsi(data.kursus.deskripsi);
                setHarga(data.kursus.harga);
                setLamaKursus(data.kursus.lamaKursus);
                setTanggalMulai(data.kursus.tanggalMulai);
                setTanggalSelesai(data.kursus.tanggalSelesai);
                setInstrukturId(data.kursus.userId);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        if (id) {
            fetchKursus();
        }
    }, [id]);

    useEffect(() => {
        const fetchInstruktur = async () => {
            try {
                const res = await axios.get('/api/instruktur/all');
                setInstrukturs(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchInstruktur();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            await axios.put(`/api/kursus/${id}`, {
                nama,
                deskripsi,
                harga,
                lamaKursus,
                tanggalMulai,
                tanggalSelesai,
                userId: instrukturId,
            });
            console.log("instrukturId: ", instrukturId);

        } catch (error) {
            console.error("Gagal update:", error);
            toast.error("Gagal update");
        }
        toast.success("Kursus berhasil diupdate");
        redirect('/dashboard/data-kursus');

    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }
    if (!kursus) return <div>Kursus tidak ditemukan.</div>;

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800">Edit Kursus</h2>

            <div className="flex flex-col">
                <label htmlFor="nama" className="mb-1 text-sm font-medium text-gray-700">
                    Nama Kursus
                </label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="deskripsi" className="mb-1 text-sm font-medium text-gray-700">
                    Deskripsi
                </label>
                <textarea
                    id="deskripsi"
                    name="deskripsi"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
            </div>



            <div className="flex flex-col">
                <label htmlFor="nama" className="mb-1 text-sm font-medium text-gray-700">
                    Harga
                </label>
                <input
                    type="text"
                    id="harga"
                    name="harga"
                    value={harga}
                    onChange={(e) => setHarga(Number(e.target.value))}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>


            <div className="flex flex-col">
                <label htmlFor="nama" className="mb-1 text-sm font-medium text-gray-700">
                    Lama Kursus (bulan)
                </label>
                <input
                    type="text"
                    id="lamaKursus"
                    name="lamaKursus"
                    value={lamaKursus}
                    onChange={(e) => setLamaKursus(Number(e.target.value))}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>


            <div className="flex flex-col">
                <label htmlFor="nama" className="mb-1 text-sm font-medium text-gray-700">
                    Tanggal Mulai
                </label>
                <input
                    type="date"
                    id="tanggalMulai"
                    name="tanggalMulai"
                    value={tanggalMulai ? tanggalMulai.split('T')[0] : ''}
                    onChange={(e) => setTanggalMulai(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="nama" className="mb-1 text-sm font-medium text-gray-700">
                    Tanggal Selesai
                </label>
                <input
                    type="date"
                    id="tanggalSelesai"
                    name="tanggalSelesai"
                    value={tanggalSelesai ? tanggalSelesai.split('T')[0] : ''}
                    onChange={(e) => setTanggalSelesai(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="instruktur-select" className="block mb-2 font-medium text-gray-700">
                    Instruktur
                </label>
                <select
                    id="instruktur-select"
                    value={instrukturId}
                    onChange={(e) => setInstrukturId(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded"
                >
                    {instrukturs.map((instruktur) => (
                        <option key={instruktur.id} value={instruktur.id}>
                            {instruktur.nama}
                        </option>
                    ))}
                </select>
            </div>




            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Simpan
            </button>
        </form>
    );
};

export default EditKursusPage;