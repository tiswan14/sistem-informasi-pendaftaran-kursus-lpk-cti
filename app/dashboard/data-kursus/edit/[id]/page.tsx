"use client";

import axios from 'axios';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Calendar, BookOpen, User2, Clock, MapPin, DoorOpen, CheckCircle2, ChevronDown, RefreshCw, Save } from 'lucide-react';

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
    const [kuota, setKuota] = useState(0);
    const [status, setStatus] = useState<'aktif' | 'nonaktif'>('aktif');
    const [instrukturId, setInstrukturId] = useState('');
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([]);
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await axios.get(`/api/kursus/${id}`);
                const data = res.data;
                console.log("Full response:", data);

                setKursus(data);
                setNama(data.kursus.nama);
                setDeskripsi(data.kursus.deskripsi);
                setHarga(data.kursus.harga);
                setLamaKursus(data.kursus.lamaKursus);
                setTanggalMulai(data.kursus.tanggalMulai);
                setTanggalSelesai(data.kursus.tanggalSelesai);
                setKuota(data.kursus.kuota);
                setStatus(data.kursus.status);
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
        setIsPending(true);
        try {
            const payload = {
                nama,
                deskripsi,
                harga,
                lamaKursus,
                tanggalMulai,
                tanggalSelesai,
                kuota,
                status,
                userId: instrukturId,
            };

            const response = await axios.put(`/api/kursus/${id}`, payload);

            console.log("Payload yang dikirim:", payload);
            console.log("Respon dari server:", response.data);

            toast.success("Kursus berhasil diupdate");
            redirect('/dashboard/data-kursus');
        } catch (error) {
            console.error("Gagal update:", error);
        } finally {
            setIsPending(false);
        }
    };

    const handleReset = () => {
        if (kursus) {
            setNama(kursus.kursus.nama);
            setDeskripsi(kursus.kursus.deskripsi);
            setHarga(kursus.kursus.harga);
            setLamaKursus(kursus.kursus.lamaKursus);
            setTanggalMulai(kursus.kursus.tanggalMulai);
            setTanggalSelesai(kursus.kursus.tanggalSelesai);
            setKuota(kursus.kursus.kuota);
            setStatus(kursus.kursus.status);
            setInstrukturId(kursus.kursus.userId);
        }
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Edit Kursus
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Nama Kursus */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kursus</label>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Nama kursus"
                            />
                        </div>
                    </div>

                    {/* Harga */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Harga</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-400">Rp</span>
                            <input
                                type="number"
                                value={harga}
                                onChange={(e) => setHarga(Number(e.target.value))}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Harga kursus"
                            />
                        </div>
                    </div>

                    {/* Lama Kursus */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lama Kursus (bulan)</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="number"
                                value={lamaKursus}
                                onChange={(e) => setLamaKursus(Number(e.target.value))}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Durasi dalam bulan"
                            />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="date"
                                value={tanggalMulai ? tanggalMulai.split('T')[0] : ''}
                                onChange={(e) => setTanggalMulai(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                    </div>

                    {/* Tanggal Selesai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Selesai</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="date"
                                value={tanggalSelesai ? tanggalSelesai.split('T')[0] : ''}
                                onChange={(e) => setTanggalSelesai(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Deskripsi */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <textarea
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className="py-2 px-3 rounded-md border border-gray-300 w-full h-24"
                            placeholder="Deskripsi kursus..."
                        />
                    </div>

                    {/* Kuota */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kuota</label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="number"
                                value={kuota}
                                onChange={(e) => setKuota(Number(e.target.value))}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Jumlah kuota"
                                min={0}
                            />
                        </div>
                    </div>

                    {/* Instruktur */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Instruktur</label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                value={instrukturId}
                                onChange={(e) => setInstrukturId(e.target.value)}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Instruktur</option>
                                {instrukturs.map((instruktur) => (
                                    <option key={instruktur.id} value={instruktur.id}>
                                        {instruktur.nama}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <div className="relative">
                            <CheckCircle2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value as 'aktif' | 'nonaktif')}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="aktif">Aktif</option>
                                <option value="nonaktif">Nonaktif</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 mt-6">
                <button
                    type="button"
                    onClick={handleReset}
                    className="cursor-pointer flex-1 bg-gray-100 text-gray-600 py-2 px-4 text-base font-medium rounded-md shadow-sm flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                </button>

                <button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer flex-1 bg-blue-600 text-white py-2 px-4 text-base font-medium rounded-md shadow-sm flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-70"
                >
                    <Save className="h-4 w-4 mr-2" />
                    {isPending ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
            </div>
        </form>
    );
};

export default EditKursusPage;