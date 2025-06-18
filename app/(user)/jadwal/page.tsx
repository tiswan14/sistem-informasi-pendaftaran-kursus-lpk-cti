"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin, Calendar, DoorOpen, BookOpen } from 'lucide-react';

const JadwalPage = () => {
    const [jadwalData, setJadwalData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJadwal = async () => {
            try {
                const res = await fetch("/api/jadwal/session");
                const data = await res.json();
                setJadwalData(data);
            } catch (error) {
                console.error("Error fetching jadwal:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJadwal();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 md:py-36 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center mb-8 md:mb-8 pt-24 md:py-0 text-gray-600">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-800">Jadwal Kursus Anda</h1>
                    </div>
                </div>



                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                />
                            ))}
                        </div>
                        <p className="mt-4 text-gray-500">Memuat jadwal...</p>
                    </div>
                ) : jadwalData.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="mx-auto h-24 w-24 text-gray-400">
                            <Calendar size={96} className="opacity-50 mx-auto" />
                        </div>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Tidak ada jadwal</h3>
                        <p className="mt-1 text-gray-500">Anda belum memiliki jadwal kursus</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {jadwalData.map((item, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                {/* Blue accent header */}
                                <div className="bg-blue-500 px-5 py-3">
                                    <h2 className="text-lg md:text-xl font-bold text-white text-center">
                                        {item.kursus.nama}
                                    </h2>
                                </div>

                                {/* Schedule Table */}
                                <div className="bg-white overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-blue-50">
                                            <tr>
                                                <th scope="col" className="px-5 py-3 text-left text-sm md:text-base font-semibold text-blue-800 uppercase tracking-wider">
                                                    <div className="flex items-center gap-2">
                                                        <CalendarDays className="w-4 h-4 md:w-5 md:h-5" />
                                                        Hari & Waktu
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-sm md:text-base font-semibold text-blue-800 uppercase tracking-wider">
                                                    <div className="flex items-center gap-2">
                                                        <DoorOpen className="w-4 h-4 md:w-5 md:h-5" />
                                                        Ruangan
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-sm md:text-base font-semibold text-blue-800 uppercase tracking-wider">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                                        Lokasi
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-left text-sm md:text-base font-semibold text-blue-800 uppercase tracking-wider">
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                                                        Materi
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {item.kursus?.jadwal?.map((jadwal, i) => (
                                                <tr
                                                    key={`${index}-${i}`}
                                                    className="hover:bg-blue-50/50 transition-colors duration-150 even:bg-gray-50"
                                                >
                                                    <td className="px-5 py-3 whitespace-nowrap">
                                                        <div className="flex flex-col">
                                                            <span className="font-medium text-gray-900 text-base">{jadwal.hari}</span>
                                                            <span className="text-xs text-gray-500">{jadwal.jamMulai} - {jadwal.jamSelesai}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 whitespace-nowrap">
                                                        <span className={`px-2 py-1 rounded-md text-base ${jadwal.ruangan ? "bg-blue-100 text-blue-800" : "text-gray-400"}`}>
                                                            {jadwal.ruangan || '-'}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span className={`text-base ${jadwal.lokasi ? "text-gray-700" : "text-gray-400"}`}>
                                                            {jadwal.lokasi || '-'}
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3">
                                                        <span className={`text-base ${jadwal.deskripsi ? "text-gray-700" : "text-gray-400"}`}>
                                                            {jadwal.deskripsi || '-'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                )}
            </div>
        </div>

    );
};

export default JadwalPage;
