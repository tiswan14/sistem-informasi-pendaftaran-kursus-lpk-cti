"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Calendar, BookOpen, User2, Clock, CheckCircle2, ChevronDown, RefreshCw, Save, Loader2, Upload } from 'lucide-react';
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
        kuota: number;
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
    const [kuota, setKuota] = useState(0);
    const [status, setStatus] = useState<'aktif' | 'nonaktif'>('aktif');
    const [instrukturId, setInstrukturId] = useState('');
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([]);
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [previewThumbnail, setPreviewThumbnail] = useState<string | null>(null);

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
                setKuota(data.kursus.kuota);
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
            formData.append("kuota", String(kuota));
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
            setKuota(kursus.kursus.kuota);
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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Edit Kursus</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-5">
                    {/* Nama Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Kursus</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Nama kursu"
                            />
                        </div>
                    </div>

                    {/* Harga */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Harga</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                            <input
                                type="number"
                                value={harga}
                                onChange={(e) => setHarga(Number(e.target.value))}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Harga kursus"
                            />
                        </div>
                    </div>

                    {/* Kuota */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kuota Peserta</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                value={kuota}
                                onChange={(e) => setKuota(Number(e.target.value))}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Jumlah kuota"
                                min="1"
                            />
                        </div>
                    </div>

                    {/* Lama Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Lama Kursus (jam)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Clock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                value={lamaKursus}
                                onChange={(e) => setLamaKursus(Number(e.target.value))}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Durasi dalam bulan"
                            />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                value={tanggalMulai ? tanggalMulai.split('T')[0] : ''}
                                onChange={(e) => setTanggalMulai(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Tanggal Selesai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                value={tanggalSelesai ? tanggalSelesai.split('T')[0] : ''}
                                disabled
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Thumbnail</label>
                        <div className="mt-1 flex items-center gap-4">
                            <label className="cursor-pointer">
                                <span className="px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors inline-flex items-center">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Pilih File
                                </span>
                                <input
                                    type="file"
                                    id="thumbnail"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setThumbnail(file);
                                            setPreviewThumbnail(URL.createObjectURL(file));
                                        }
                                    }}
                                    className="hidden"
                                />
                            </label>
                            {thumbnail && (
                                <span className="text-sm text-gray-500 truncate">{thumbnail.name}</span>
                            )}
                        </div>
                        {previewThumbnail && (
                            <div className="mt-3">
                                <Image
                                    src={previewThumbnail}
                                    alt="Preview Thumbnail"
                                    width={256}
                                    height={144}
                                    className="w-full max-w-xs rounded-lg border shadow-sm object-cover aspect-video"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                    {/* Deskripsi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                        <textarea
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className="block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-40"
                            placeholder="Deskripsi kursus..."
                        />
                    </div>

                    {/* Instruktur */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Instruktur</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                value={instrukturId}
                                onChange={(e) => setInstrukturId(e.target.value)}
                                className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                            >
                                <option value="">Pilih Instruktur</option>
                                {instrukturs.map((instruktur) => (
                                    <option key={instruktur.id} value={instruktur.id}>
                                        {instruktur.nama}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CheckCircle2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value as 'aktif' | 'nonaktif')}
                                className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                            >
                                <option value="aktif">Aktif</option>
                                <option value="nonaktif">Nonaktif</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-100">
                <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center"
                >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                </button>
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Menyimpan...
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Simpan Perubahan
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default EditKursusPage;