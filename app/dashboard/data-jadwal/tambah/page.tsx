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

const TambahJadwalForm = () => {
    const [kursusId, setKursusId] = useState("");
    const [instrukturId, setInstrukturId] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [hari, setHari] = useState("");
    const [jamMulai, setJamMulai] = useState("");
    const [jamSelesai, setJamSelesai] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [ruangan, setRuangan] = useState("");
    const [status, setStatus] = useState("aktif");

    const [kursusList, setKursusList] = useState([]);
    const [loadingKursus, setLoadingKursus] = useState(true);
    const [errorKursus, setErrorKursus] = useState(null);

    const [instrukturList, setInstrukturList] = useState([]);
    const [loadingInstruktur, setLoadingInstruktur] = useState(true);
    const [errorInstruktur, setErrorInstruktur] = useState(null);

    const [isPending, setIsPending] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsPending(true)
        try {
            await axios.post('/api/jadwal', {
                kursusId,
                instrukturId,
                deskripsi,
                hari,
                jamMulai,
                jamSelesai,
                lokasi,
                ruangan,
                status
            })
            router.push("/dashboard/data-jadwal")
            toast.success("Jadwal berhasil ditambahkan")
        } catch (error) {
            console.log("Error tambah jadwal", error)
            toast.error("Gagal menambahkan jadwal")
        } finally {
            setIsPending(false)
        }
    }
    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const response = await axios.get('/api/kursus');
                setKursusList(response.data);
                console.log(response.data);

            } catch (err) {
                setErrorKursus(err.message || 'Gagal memuat data kursus');
                console.error("Error fetching kursus:", err);
            } finally {
                setLoadingKursus(false);
            }
        };

        fetchKursus();
    }, []);

    useEffect(() => {
        const fetchInstruktur = async () => {
            try {
                const response = await axios.get('/api/instruktur/all');
                setInstrukturList(response.data);
            } catch (err) {
                setErrorInstruktur(err.message || 'Gagal memuat data instruktur');
                console.error("Error fetching instruktur:", err);
            } finally {
                setLoadingInstruktur(false);
            }
        };

        fetchInstruktur();
    }, []);


    const handleReset = () => {
        setKursusId("");
        setInstrukturId("");
        setDeskripsi("");
        setHari("");
        setJamMulai("");
        setJamSelesai("");
        setLokasi("");
        setRuangan("");
        setStatus("aktif");
    }

    const days = [
        "Senin", "Selasa", "Rabu", "Kamis",
        "Jumat", "Sabtu", "Minggu"
    ];

    return (
        <form onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
        >
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
                                value={kursusId}
                                onChange={(e) => setKursusId(e.target.value)}
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
                                value={hari}
                                onChange={(e) => setHari(e.target.value)}
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
                                value={jamMulai}
                                onChange={(e) => setJamMulai(e.target.value)}
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
                                value={jamSelesai}
                                onChange={(e) => setJamSelesai(e.target.value)}
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
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className="py-2 px-3 rounded-md border border-gray-300 w-full h-24"
                            placeholder="Deskripsi jadwal..."
                        />
                    </div>

                    {/* Lokasi */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi (Opsional)</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={lokasi}
                                onChange={(e) => setLokasi(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Contoh: Gedung A"
                            />
                        </div>
                    </div>

                    {/* Ruangan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ruangan (Opsional)</label>
                        <div className="relative">
                            <DoorOpen className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={ruangan}
                                onChange={(e) => setRuangan(e.target.value)}
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
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
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