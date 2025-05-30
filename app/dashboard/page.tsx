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
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Card 1 - Peserta Kursus */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600"
                    onMouseEnter={() => setHoveredCard('peserta')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'peserta' ? 'bg-blue-100' : 'bg-blue-50'}`}>
                            <FaUsers className="text-xl text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Peserta Kursus</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalPeserta}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Instruktur Terdaftar */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-500 hover:border-amber-600"
                    onMouseEnter={() => setHoveredCard('instruktur')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'instruktur' ? 'bg-amber-100' : 'bg-amber-50'}`}>
                            <FaChalkboardTeacher className="text-xl text-amber-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Instruktur Terdaftar</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalInstruktur}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Kursus Aktif */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500 hover:border-green-600"
                    onMouseEnter={() => setHoveredCard('kursus')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'kursus' ? 'bg-green-100' : 'bg-green-50'}`}>
                            <FaClipboardList className="text-xl text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Kursus Aktif</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalKursus}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Sertifikat Diberikan */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-purple-500 hover:border-purple-600"
                    onMouseEnter={() => setHoveredCard('sertifikat')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'sertifikat' ? 'bg-purple-100' : 'bg-purple-50'}`}>
                            <FaCertificate className="text-xl text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Sertifikat Diberikan</p>
                            <h3 className="text-2xl font-bold text-gray-800">{sertifikatDiberikan}</h3>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Pembayaran Pendaftar */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-500 hover:border-red-600"
                    onMouseEnter={() => setHoveredCard('pembayaran')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'pembayaran' ? 'bg-red-100' : 'bg-red-50'}`}>
                            <FaMoneyBillWave className="text-xl text-red-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pembayaran Pendaftar</p>
                            <h3 className="text-2xl font-bold text-gray-800">12</h3>
                        </div>
                    </div>
                </div>

                {/* Card 6 - Jadwal Aktif */}
                <div
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-indigo-500 hover:border-indigo-600"
                    onMouseEnter={() => setHoveredCard('jadwal')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${hoveredCard === 'jadwal' ? 'bg-indigo-100' : 'bg-indigo-50'}`}>
                            <FaCalendarAlt className="text-xl text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Jadwal Aktif</p>
                            <h3 className="text-2xl font-bold text-gray-800">23</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jadwal Kursus Terdekat */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Jadwal Kursus Terdekat</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <ul className="divide-y divide-gray-200">
                        <li className="flex justify-between py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200">
                            <span className="font-medium text-gray-700">Komputer Umum & Internet</span>
                            <span className="text-blue-600 font-medium">Mulai: 15 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200">
                            <span className="font-medium text-gray-700">Pemrograman</span>
                            <span className="text-blue-600 font-medium">Mulai: 20 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200">
                            <span className="font-medium text-gray-700">Digital Marketing</span>
                            <span className="text-blue-600 font-medium">Mulai: 25 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200">
                            <span className="font-medium text-gray-700">Desain Grafis</span>
                            <span className="text-blue-600 font-medium">Mulai: 30 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-3 hover:bg-blue-50 px-2 rounded transition-colors duration-200">
                            <span className="font-medium text-gray-700">Jaringan Komputer</span>
                            <span className="text-blue-600 font-medium">Mulai: 5 Juni 2025</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;