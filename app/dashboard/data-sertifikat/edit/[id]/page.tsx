"use client";

import {
    FileText,
    Hash,
    Download,
    RefreshCw,
    Save,
    BookOpen,
    ChevronDown,
    Calendar,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";

const EditSertifikatForm = () => {
    const { id } = useParams(); // Get the ID from URL params
    const [pendaftaranId, setPendaftaranId] = useState("");
    const [nomor, setNomor] = useState("");
    const [tanggalTerbit, setTanggalTerbit] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [currentFileUrl, setCurrentFileUrl] = useState("");

    const [pendaftaranList, setPendaftaranList] = useState([]);
    const [loadingPendaftaran, setLoadingPendaftaran] = useState(true);
    const [errorPendaftaran, setErrorPendaftaran] = useState(null);
    const [loadingSertifikat, setLoadingSertifikat] = useState(true);

    const [isPending, setIsPending] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // Fetch certificate data
        const fetchSertifikat = async () => {
            try {
                const response = await axios.get(`/api/sertifikat/${id}`);
                const sertifikat = response.data;
                setPendaftaranId(sertifikat.pendaftaranId);
                setNomor(sertifikat.nomor);
                setTanggalTerbit(sertifikat.tanggalTerbit?.split('T')[0] || ''); // Format date for input
                setCurrentFileUrl(sertifikat.fileUrl);
            } catch (err) {
                console.error("Error fetching sertifikat:", err);
                toast.error("Gagal memuat data sertifikat");
            } finally {
                setLoadingSertifikat(false);
            }
        };

        // Fetch pendaftaran list
        const fetchPendaftaran = async () => {
            try {
                const response = await axios.get('/api/pendaftaran?status=lulus');
                setPendaftaranList(response.data.filter(p => p.status.toLowerCase() === 'lulus'));
            } catch (err) {
                setErrorPendaftaran(err.message || 'Gagal memuat data pendaftaran');
                console.error("Error fetching pendaftaran:", err);
            } finally {
                setLoadingPendaftaran(false);
            }
        };

        fetchSertifikat();
        fetchPendaftaran();
    }, [id]);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const formData = new FormData();
            formData.append('pendaftaranId', pendaftaranId);
            formData.append('nomor', nomor);
            formData.append('tanggalTerbit', tanggalTerbit);
            if (file) {
                formData.append('file', file);
            }

            const response = await axios.put(`/api/sertifikat/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            router.push("/dashboard/data-sertifikat");
            toast.success("Sertifikat berhasil diperbarui");
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.error || "Gagal memperbarui sertifikat");
        } finally {
            setIsPending(false);
        }
    };

    const handleReset = () => {
        // Reset only the file input, keep other fields as they are
        setFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    if (loadingSertifikat || loadingPendaftaran) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Edit Sertifikat
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Pendaftaran */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pendaftaran (Lulus)</label>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                required
                                value={pendaftaranId}
                                onChange={(e) => setPendaftaranId(e.target.value)}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Pendaftaran</option>
                                {pendaftaranList.map((pendaftaran) => (
                                    <option key={pendaftaran.id} value={pendaftaran.id}>
                                        {pendaftaran.user?.nama} - {pendaftaran.kursus?.nama}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Nomor Sertifikat */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Sertifikat</label>
                        <div className="relative">
                            <Hash className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                required
                                type="text"
                                value={nomor}
                                onChange={(e) => setNomor(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Contoh: CERT-2023-001"
                            />
                        </div>
                    </div>

                    {/* Tanggal Terbit */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Terbit</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                required
                                type="date"
                                value={tanggalTerbit}
                                onChange={(e) => setTanggalTerbit(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* File Upload */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">File Sertifikat (PDF)</label>
                        <div className="relative">
                            <Download className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileChange}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                        {file ? (
                            <p className="mt-1 text-sm text-gray-500">
                                File baru: {file.name}
                            </p>
                        ) : currentFileUrl ? (
                            <p className="mt-1 text-sm text-gray-500">
                                File saat ini: <a href={currentFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lihat file</a>
                            </p>
                        ) : (
                            <p className="mt-1 text-sm text-gray-500">
                                Tidak ada file yang dipilih
                            </p>
                        )}
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

export default EditSertifikatForm;