"use client";

import {
    FileText,
    Hash,
    RefreshCw,
    Save,
    BookOpen,
    ChevronDown,
    Calendar,
    Loader2,
    AlertCircle,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";

const EditSertifikatForm = () => {
    const { id } = useParams();
    const [pendaftaranId, setPendaftaranId] = useState("");
    const [nomor, setNomor] = useState("");
    const [tanggalTerbit, setTanggalTerbit] = useState("");

    const [pendaftaranList, setPendaftaranList] = useState([]);
    const [loadingPendaftaran, setLoadingPendaftaran] = useState(true);
    const [errorPendaftaran, setErrorPendaftaran] = useState(null);
    const [loadingSertifikat, setLoadingSertifikat] = useState(true);

    const [isPending, setIsPending] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchSertifikat = async () => {
            try {
                const response = await axios.get(`/api/sertifikat/${id}`);
                const sertifikat = response.data;
                setPendaftaranId(sertifikat.pendaftaranId);
                setNomor(sertifikat.nomor);
                setTanggalTerbit(sertifikat.tanggalTerbit?.split('T')[0] || '');
            } catch (err) {
                console.error("Error fetching sertifikat:", err);
                toast.error("Gagal memuat data sertifikat");
            } finally {
                setLoadingSertifikat(false);
            }
        };

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
            const payload = {
                pendaftaranId,
                nomor,
                tanggalTerbit,
            };

            const response = await axios.put(`/api/sertifikat/${id}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
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
        setNomor("");
        setTanggalTerbit("");
    };

    const isLoading = loadingSertifikat || loadingPendaftaran;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Edit Sertifikat
            </h2>

            {isLoading ? (
                <div className="space-y-4">
                    <div className="animate-pulse flex flex-col space-y-4">
                        <div className="h-14 bg-gray-100 rounded-md"></div>
                        <div className="h-14 bg-gray-100 rounded-md"></div>
                        <div className="h-14 bg-gray-100 rounded-md"></div>
                        <div className="flex space-x-3 mt-6">
                            <div className="flex-1 h-10 bg-gray-100 rounded-md"></div>
                            <div className="flex-1 h-10 bg-gray-100 rounded-md"></div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4">
                        <Loader2 className="h-6 w-6 text-blue-500 animate-spin" />
                    </div>
                </div>
            ) : errorPendaftaran ? (
                <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="font-medium">Gagal memuat data</p>
                        <p className="text-sm">{errorPendaftaran}</p>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Pendaftaran (Lulus)</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                    <select
                                        required
                                        value={pendaftaranId}
                                        onChange={(e) => setPendaftaranId(e.target.value)}
                                        className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 h-10"
                                        disabled={isPending}
                                    >
                                        <option value="">Pilih Pendaftaran</option>
                                        {pendaftaranList.map((pendaftaran) => (
                                            <option key={pendaftaran.id} value={pendaftaran.id}>
                                                {pendaftaran.user?.nama} - {pendaftaran.kursus?.nama}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 h-5 w-5" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Nomor Sertifikat</label>
                                <div className="relative">
                                    <Hash className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                    <input
                                        required
                                        type="text"
                                        value={nomor}
                                        onChange={(e) => setNomor(e.target.value)}
                                        className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 h-10"
                                        placeholder="Contoh: CERT-2023-001"
                                        disabled={isPending}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Terbit</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                    <input
                                        required
                                        type="date"
                                        value={tanggalTerbit}
                                        onChange={(e) => setTanggalTerbit(e.target.value)}
                                        className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full focus:ring-blue-500 focus:border-blue-500 h-10"
                                        disabled={isPending}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-8">
                        <button
                            type="button"
                            onClick={handleReset}
                            disabled={isPending}
                            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${isPending
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Reset
                        </button>

                        <button
                            type="submit"
                            disabled={isPending}
                            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${isPending
                                ? "bg-blue-400 cursor-wait"
                                : "bg-blue-600 hover:bg-blue-700"
                                }`}
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
            )}
        </div>
    );
};

export default EditSertifikatForm;