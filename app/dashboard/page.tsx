"use client";

import React, { useState, useEffect } from "react";
import { FaUsers, FaClipboardList, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div
                    className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-blue-100"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-blue-100 rounded-lg transition ${hoveredCard === 'peserta' ? 'bg-blue-200' : ''}`}>
                            <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-md font-medium text-gray-700">Peserta Kursus</h2>
                            <p className="text-xl font-semibold text-gray-900">{totalPeserta}</p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-yellow-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-yellow-100"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-yellow-100 rounded-lg transition ${hoveredCard === 'instruktur' ? 'bg-yellow-200' : ''}`}>
                            <FaChalkboardTeacher className="text-2xl text-yellow-600" />
                        </div>
                        <div>
                            <h2 className="text-md font-medium text-gray-700">Instruktur Terdaftar</h2>
                            <p className="text-xl font-semibold text-gray-900">{totalInstruktur}</p>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-green-100"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-green-100 rounded-lg transition ${hoveredCard === 'kursus' ? 'bg-green-200' : ''}`}>
                            <FaClipboardList className="text-2xl text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-md font-medium text-gray-700">Kursus Aktif</h2>
                            <p className="text-xl font-semibold text-gray-900">{totalKursus}</p>
                        </div>
                    </div>
                </div>



                <div
                    className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-purple-100"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-purple-100 rounded-lg transition ${hoveredCard === 'sertifikat' ? 'bg-purple-200' : ''}`}>
                            <FaCertificate className="text-2xl text-purple-600" />
                        </div>
                        <div>
                            <h2 className="text-md font-medium text-gray-700">Sertifikat Diberikan</h2>
                            <p className="text-xl font-semibold text-gray-900">{sertifikatDiberikan}</p>
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