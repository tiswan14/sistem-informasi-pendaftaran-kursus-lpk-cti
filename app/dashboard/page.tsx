"use client";

import React, { useState, useEffect } from "react";
import { FaUsers, FaClipboardList, FaChalkboardTeacher, FaCertificate, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";


const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const [totalPeserta, setTotalPeserta] = useState(0);
    const [totalInstruktur, setTotalInstruktur] = useState(0);
    const [totalKursus, setTotalKursus] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    const sertifikatDiberikan = 50;

    useEffect(() => {
        async function fetchTotalPeserta() {
            setLoading(true);
            try {
                const response = await fetch("/api/peserta/total-peserta");
                const data = await response.json();
                setTotalPeserta(data.total);
            } catch (error) {
                console.error("Gagal mengambil total peserta:", error);
            }
            setLoading(false);
        }
        fetchTotalPeserta();
    }, []);

    useEffect(() => {

        async function fetchTotalInstruktur() {
            setLoading(true);
            try {
                const response = await fetch("/api/instruktur/total-instruktur");
                const data = await response.json();
                setTotalInstruktur(data.total);
            } catch (error) {
                console.error("Gagal mengambil total instruktur:", error);
            }
            setLoading(false);
        }
        fetchTotalInstruktur();
    }, [])

    useEffect(() => {
        async function fetchTotalKursus() {
            setLoading(true);
            try {
                const response = await fetch("/api/kursus/total-kursus");
                const data = await response.json();
                setTotalKursus(data.total);
            } catch (error) {
                console.error("Gagal mengambil total kursus:", error);
            }
            setLoading(false);
        }
        fetchTotalKursus();
    }, [])

    if (loading) {
        return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                    <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </h1>

                {/* Card Skeletons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl shadow-xs border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-lg bg-gray-200 animate-pulse">
                                    <div className="w-5 h-5"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Table Skeleton */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                    </h2>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {[...Array(6)].map((_, i) => (
                                        <th key={i} className="px-6 py-3">
                                            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[...Array(3)].map((_, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-50">
                                        {[...Array(6)].map((_, colIndex) => (
                                            <td key={colIndex} className="px-6 py-4">
                                                <div
                                                    className="h-4 bg-gray-200 rounded animate-pulse"
                                                    style={{
                                                        width: colIndex === 1 ? '80%' : '50%',
                                                        animationDelay: `${rowIndex * 0.05}s`,
                                                        animationDuration: '1.5s'
                                                    }}
                                                ></div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }



    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {/* Card 1 - Peserta Kursus */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('peserta')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'peserta' ? 'bg-blue-100 text-blue-600' : 'bg-blue-50 text-blue-500'}`}>
                            <FaUsers className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Peserta Kursus</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalPeserta}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Instruktur Terdaftar */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-amber-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('instruktur')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'instruktur' ? 'bg-amber-100 text-amber-600' : 'bg-amber-50 text-amber-500'}`}>
                            <FaChalkboardTeacher className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Instruktur Terdaftar</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalInstruktur}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Kursus Aktif */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-green-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('kursus')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'kursus' ? 'bg-green-100 text-green-600' : 'bg-green-50 text-green-500'}`}>
                            <FaClipboardList className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Kursus Aktif</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalKursus}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Sertifikat Diberikan */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-purple-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('sertifikat')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'sertifikat' ? 'bg-purple-100 text-purple-600' : 'bg-purple-50 text-purple-500'}`}>
                            <FaCertificate className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Sertifikat Diberikan</p>
                            <h3 className="text-2xl font-bold text-gray-800">{sertifikatDiberikan}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Pembayaran Pendaftar */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-red-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('pembayaran')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'pembayaran' ? 'bg-red-100 text-red-600' : 'bg-red-50 text-red-500'}`}>
                            <FaMoneyBillWave className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pembayaran Pendaftar</p>
                            <h3 className="text-2xl font-bold text-gray-800">12</h3>
                        </div>
                    </div>
                </div>

                {/* Card 6 - Jadwal Aktif */}
                <div
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-indigo-100 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard('jadwal')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <div className="flex items-center space-x-4 z-10 relative">
                        <div className={`p-3 rounded-lg transition-colors duration-200 ${hoveredCard === 'jadwal' ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-50 text-indigo-500'}`}>
                            <FaCalendarAlt className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Jadwal Aktif</p>
                            <h3 className="text-2xl font-bold text-gray-800">23</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    Jadwal Kursus Terdekat
                </h2>

                <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">No</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Nama Kursus</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Durasi</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Tanggal Mulai</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Tanggal Selesai</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left">Instruktur</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-700">1</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Komputer Umum & Internet</td>
                                <td className="px-6 py-4 text-sm text-gray-500">4 Minggu</td>
                                <td className="px-6 py-4 text-sm text-gray-700">15 Mei 2025</td>
                                <td className="px-6 py-4 text-sm text-gray-700">12 Juni 2025</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <div className="text-sm font-medium text-gray-900">Budi Santoso</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-700">2</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Pemrograman Dasar</td>
                                <td className="px-6 py-4 text-sm text-gray-500">4 Minggu</td>
                                <td className="px-6 py-4 text-sm text-gray-700">20 Mei 2025</td>
                                <td className="px-6 py-4 text-sm text-gray-700">17 Juni 2025</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <div className="text-sm font-medium text-gray-900">Ani Wijaya</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-700">3</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Desain Grafis</td>
                                <td className="px-6 py-4 text-sm text-gray-500">6 Minggu</td>
                                <td className="px-6 py-4 text-sm text-gray-700">1 Juni 2025</td>
                                <td className="px-6 py-4 text-sm text-gray-700">13 Juli 2025</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <div className="text-sm font-medium text-gray-900">Citra Dewi</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;