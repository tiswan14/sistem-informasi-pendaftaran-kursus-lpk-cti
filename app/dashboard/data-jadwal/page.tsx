"use client";

import JadwalTable from "@/components/admin/jadwal/jadwal-table";
import { CalendarPlus, CalendarDays, BookOpen, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Kursus {
    id: number;
    nama: string;
}

const DaftarJadwalPage = () => {
    const [filterHari, setFilterHari] = useState("");
    const [daftarKursus, setDaftarKursus] = useState<Kursus[]>([]);
    const [filterKursus, setFilterKursus] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await axios.get("/api/kursus");
                setDaftarKursus(res.data);
            } catch (err) {
                console.error("Gagal ambil kursus:", err);
                toast.error("Gagal memuat data kursus");
            } finally {
                setLoading(false);
            }
        };

        fetchKursus();
    }, []);


    useEffect(() => {
        const savedHari = localStorage.getItem("filterHari");
        const savedKursus = localStorage.getItem("filterKursus");

        if (savedHari) setFilterHari(savedHari);
        if (savedKursus) setFilterKursus(savedKursus);
    }, []);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilterHari(value);
        localStorage.setItem("filterHari", value);
    };


    const handleKursusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilterKursus(value);
        localStorage.setItem("filterKursus", value);
    };


    return (
        <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-8 h-8 text-blue-600" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">Daftar Jadwal</h1>
                            <p className="text-sm text-gray-500">Kelola jadwal kursus yang tersedia</p>
                        </div>
                    </div>

                    <Link
                        href="/dashboard/data-jadwal/tambah"
                        className="inline-flex items-center px-4 py-2.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium shadow-md w-full md:w-auto justify-center"
                    >
                        <CalendarPlus className="mr-2 w-4 h-4" />
                        Tambah Jadwal
                    </Link>
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <BookOpen className="w-4 h-4" />
                            Filter Kursus
                        </label>
                        <select
                            onChange={handleKursusChange}
                            value={filterKursus}
                            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                        >
                            <option value="">Semua Kursus</option>
                            {daftarKursus.map((kursus) => (
                                <option key={kursus.id} value={kursus.nama}>
                                    {kursus.nama}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <CalendarDays className="w-4 h-4" />
                            Filter Hari
                        </label>
                        <select
                            onChange={handleSortChange}
                            value={filterHari}
                            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                        >
                            <option value="">Semua Hari</option>
                            <option value="Senin">Senin</option>
                            <option value="Selasa">Selasa</option>
                            <option value="Rabu">Rabu</option>
                            <option value="Kamis">Kamis</option>
                            <option value="Jumat">Jumat</option>
                            <option value="Sabtu">Sabtu</option>
                            <option value="Minggu">Minggu</option>
                        </select>
                    </div>
                </div>

                <JadwalTable
                    filterHari={filterHari}
                    filterKursus={filterKursus}
                />
            </div>
        </div>
    );
};

export default DaftarJadwalPage;