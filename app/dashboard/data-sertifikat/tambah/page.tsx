"use client";

import {
    FileText,
    Hash,
    Calendar as CalendarIcon,
    Download,
    RefreshCw,
    Save,
    User2,
    BookOpen,
    ChevronDown,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const TambahSertifikatForm = () => {
    const [pendaftaranId, setPendaftaranId] = useState("");
    const [nomor, setNomor] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const [pendaftaranList, setPendaftaranList] = useState([]);
    const [loadingPendaftaran, setLoadingPendaftaran] = useState(true);
    const [errorPendaftaran, setErrorPendaftaran] = useState(null);

    const [isPending, setIsPending] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const formData = new FormData();
            formData.append('pendaftaranId', pendaftaranId);
            formData.append('nomor', nomor);
            if (file) {
                formData.append('file', file);
            }

            const response = await axios.post('/api/sertifikat', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            router.push("/dashboard/data-sertifikat");
            toast.success("Sertifikat berhasil ditambahkan");
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.error || "Gagal menambahkan sertifikat");
        } finally {
            setIsPending(false);
        }
    };

    useEffect(() => {
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

        fetchPendaftaran();
    }, []);

    const handleReset = () => {
        setPendaftaranId("");
        setNomor("");
        setFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Tambah Sertifikat
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
                        {file && (
                            <p className="mt-1 text-sm text-gray-500">
                                File dipilih: {file.name}
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
                    {isPending ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
};

export default TambahSertifikatForm;