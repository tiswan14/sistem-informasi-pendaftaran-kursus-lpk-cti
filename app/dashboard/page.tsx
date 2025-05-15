"use client"; // wajib kalau di folder app dan menggunakan hook client-side

import React, { useState, useEffect } from "react";
import { FaUsers, FaClipboardList, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const [totalPeserta, setTotalPeserta] = useState(0);

    const kursusAktif = 5;
    const instrukturTerdaftar = 8;
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

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="flex items-center gap-4">
                        <FaUsers className="text-3xl text-blue-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Peserta Kursus</h2>
                            <p className="text-2xl text-center">{totalPeserta}</p>
                        </div>
                    </div>
                </div>
                {/* Komponen lainnya tetap */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="flex items-center gap-4">
                        <FaClipboardList className="text-3xl text-green-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Kursus Aktif</h2>
                            <p className="text-2xl">{kursusAktif}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="flex items-center gap-4">
                        <FaChalkboardTeacher className="text-3xl text-yellow-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Instruktur Terdaftar</h2>
                            <p className="text-2xl">{instrukturTerdaftar}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="flex items-center gap-4">
                        <FaCertificate className="text-3xl text-purple-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Sertifikat Diberikan</h2>
                            <p className="text-2xl">{sertifikatDiberikan}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jadwal Kursus Terdekat */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Jadwal Kursus Terdekat</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul>
                        <li className="flex justify-between py-2 border-b">
                            <span>Komputer Umum & Internet</span>
                            <span>Mulai: 15 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                            <span>Pemrograman</span>
                            <span>Mulai: 20 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                            <span>Digital Marketing</span>
                            <span>Mulai: 25 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                            <span>Desain Grafis</span>
                            <span>Mulai: 30 Mei 2025</span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                            <span>Jaringan Komputer</span>
                            <span>Mulai: 5 Juni 2025</span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                            <span>Program Android</span>
                            <span>Mulai: 10 Juni 2025</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
