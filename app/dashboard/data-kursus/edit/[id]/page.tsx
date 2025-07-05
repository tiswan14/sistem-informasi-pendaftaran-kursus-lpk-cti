"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Calendar, BookOpen, User2, Clock, CheckCircle2, ChevronDown, RefreshCw, Save } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';


interface KursusDetail {
    kursus: {
        nama: string;
        deskripsi: string;
        harga: number;
        lamaKursus: number;
        tanggalMulai: string;
        tanggalSelesai: string;
        thumbnail?: string;
        status: 'aktif' | 'nonaktif';
        userId: string;
    };
}

interface Instruktur {
    id: string;
    nama: string;
}

const EditKursusPage = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const [kursus, setKursus] = useState<KursusDetail | null>(null);

    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState(0);
    const [lamaKursus, setLamaKursus] = useState(0);
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [status, setStatus] = useState<'aktif' | 'nonaktif'>('aktif');
    const [instrukturId, setInstrukturId] = useState('');
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([]);
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [previewThumbnail, setPreviewThumbnail] = useState<string | null>(null); // untuk preview

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
                setStatus(data.kursus.status);
                setInstrukturId(data.kursus.userId);

                // Set thumbnail lama (URL string) untuk preview
                if (data.kursus.thumbnail) {
                    setPreviewThumbnail(data.kursus.thumbnail);
                }

                setLoading(false);
            } catch (error) {
                console.error("Gagal ambil data kursus:", error);
                setLoading(false);
            }
        };

        if (id) {
            fetchKursus();
        }
    }, [id]);

    const router = useRouter()


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


    ;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        try {
            const formData = new FormData();
            formData.append("nama", nama);
            formData.append("deskripsi", deskripsi || "");
            formData.append("harga", String(harga));
            formData.append("lamaKursus", lamaKursus ? String(lamaKursus) : "");
            formData.append("tanggalMulai", tanggalMulai || "");
            formData.append("tanggalSelesai", tanggalSelesai || "");
            formData.append("status", status);
            formData.append("userId", instrukturId);
            if (thumbnail instanceof File) {
                formData.append("thumbnail", thumbnail); // Jika user upload thumbnail baru
            }

            const response = await axios.put(`/api/kursus/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Payload yang dikirim (FormData):", formData);
            console.log("Respon dari server:", response.data);

            toast.success("Kursus berhasil diupdate");
            router.push('/dashboard/data-kursus');
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
            setStatus(kursus.kursus.status);
            setInstrukturId(kursus.kursus.userId);
        }
    };


    useEffect(() => {
        if (tanggalMulai && lamaKursus > 0) {
            const mulai = new Date(tanggalMulai);
            const selesai = new Date(mulai);
            selesai.setMonth(mulai.getMonth() + lamaKursus);
            const formatted = selesai.toISOString().split("T")[0];

            setTanggalSelesai(formatted);
        }
    }, [tanggalMulai, lamaKursus]);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

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
                                disabled
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-200 w-full bg-gray-100 text-gray-500 cursor-not-allowed"
                            />

                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                            Upload Thumbnail
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            name="thumbnail"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setThumbnail(file);
                                    setPreviewThumbnail(URL.createObjectURL(file)); // preview file baru
                                }
                            }}
                            className="mt-1 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100"
                        />
                    </div>
                    {previewThumbnail && (
                        <Image
                            src={previewThumbnail}
                            alt="Preview Thumbnail"
                            width={256}
                            height={0}
                            sizes="100vw"
                            className="w-64 h-auto rounded border shadow object-contain"
                            unoptimized
                        />
                    )}




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