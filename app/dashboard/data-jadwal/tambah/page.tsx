/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
    Calendar,
    Clock,
    MapPin,
    DoorOpen,
    CheckCircle2,
    ChevronDown,
    RefreshCw,
    Save,
    BookOpen,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Kursus = {
    id: string;
    nama: string;
    user?: {
        nama: string;
    };
};

type Instruktur = {
    id: string;
    nama: string;
};

const TambahJadwalForm = () => {
    const [formData, setFormData] = useState({
        kursusId: "",
        instrukturId: "",
        deskripsi: "",
        hari: "",
        jamMulai: "",
        jamSelesai: "",
        ruangan: "",
        status: "aktif"
    });

    const [kursusList, setKursusList] = useState<Kursus[]>([]);
    const [instrukturList, setInstrukturList] = useState<Instruktur[]>([]);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const days = [
        "Senin", "Selasa", "Rabu", "Kamis",
        "Jumat", "Sabtu", "Minggu"
    ];

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (formData.jamMulai >= formData.jamSelesai) {
            toast.error("Jam mulai tidak boleh lebih besar atau sama dengan jam selesai");
            return;
        }

        setIsPending(true);
        try {
            await axios.post('/api/jadwal', formData);
            router.push("/dashboard/data-jadwal");
            toast.success("Jadwal berhasil ditambahkan");
        } catch (error) {
            console.error("Error tambah jadwal", error);
            toast.error("Gagal menambahkan jadwal");
        } finally {
            setIsPending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleReset = () => {
        setFormData({
            kursusId: "",
            instrukturId: "",
            deskripsi: "",
            hari: "",
            jamMulai: "",
            jamSelesai: "",
            ruangan: "",
            status: "aktif"
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [kursusResponse, instrukturResponse] = await Promise.all([
                    axios.get<Kursus[]>('/api/kursus'),
                    axios.get<Instruktur[]>('/api/instruktur/all')
                ]);
                setKursusList(kursusResponse.data);
                setInstrukturList(instrukturResponse.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                toast.error("Gagal memuat data");
            }
        };

        fetchData();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Tambah Jadwal
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Kursus */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kursus</label>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                required
                                name="kursusId"
                                value={formData.kursusId}
                                onChange={handleChange}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Kursus</option>
                                {kursusList.map((kursus) => (
                                    <option key={kursus.id} value={kursus.id}>
                                        {kursus.nama} - {kursus.user?.nama ?? 'Tanpa Instruktur'}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Hari */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hari</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                required
                                name="hari"
                                value={formData.hari}
                                onChange={handleChange}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Hari</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Jam Mulai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jam Mulai</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                required
                                type="time"
                                name="jamMulai"
                                value={formData.jamMulai}
                                onChange={handleChange}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                    </div>

                    {/* Jam Selesai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jam Selesai</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                required
                                type="time"
                                name="jamSelesai"
                                value={formData.jamSelesai}
                                onChange={handleChange}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Deskripsi */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi (Opsional)</label>
                        <textarea
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            className="py-2 px-3 rounded-md border border-gray-300 w-full h-24"
                            placeholder="Deskripsi jadwal..."
                        />
                    </div>


                    {/* Ruangan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ruangan (Opsional)</label>
                        <div className="relative">
                            <DoorOpen className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                name="ruangan"
                                value={formData.ruangan}
                                onChange={handleChange}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Contoh: Ruang 101"
                            />
                        </div>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <div className="relative">
                            <CheckCircle2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
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
                    {isPending ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
};

export default TambahJadwalForm;