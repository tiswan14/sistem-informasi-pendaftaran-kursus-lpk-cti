"use client";
import { Metadata } from "next";
import { useState } from "react";
import LaporanTable from "@/components/admin/laporan/laporan-table";
import { CalendarDays, Filter } from "lucide-react";


const LaporanPage = () => {
    const [tanggalMulai, setTanggalMulai] = useState("");
    const [tanggalSelesai, setTanggalSelesai] = useState("");
    const [status, setStatus] = useState("");

    const handleFilter = () => {
        // Implementasikan logika filter atau kirim props ke <LaporanTable />
        console.log("Filter:", { tanggalMulai, tanggalSelesai, status });
    };

    return (
        <div className="max-w-screen-xl px-4 mx-auto py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Laporan Pendaftar</h1>
                    <p className="text-sm text-gray-500 mt-1">Filter dan kelola data pendaftar</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full md:w-auto">
                    <div className="flex flex-wrap items-end gap-4">
                        {/* Tanggal Mulai */}
                        <div className="flex-1 min-w-[180px]">
                            <label htmlFor="tanggalMulai" className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Mulai
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <CalendarDays className="w-4 h-4 text-gray-400" />
                                </div>
                                <input
                                    type="date"
                                    id="tanggalMulai"
                                    value={tanggalMulai}
                                    onChange={(e) => setTanggalMulai(e.target.value)}
                                    className="pl-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Tanggal Selesai */}
                        <div className="flex-1 min-w-[180px]">
                            <label htmlFor="tanggalSelesai" className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Selesai
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <CalendarDays className="w-4 h-4 text-gray-400" />
                                </div>
                                <input
                                    type="date"
                                    id="tanggalSelesai"
                                    value={tanggalSelesai}
                                    onChange={(e) => setTanggalSelesai(e.target.value)}
                                    className="pl-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex-1 min-w-[180px]">
                            <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <select
                                id="statusFilter"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Semua Status</option>
                                <option value="belum">Belum Diverifikasi</option>
                                <option value="terverifikasi">Terverifikasi</option>
                                <option value="lulus">Lulus Pelatihan</option>
                            </select>
                        </div>

                        {/* Tombol Filter */}
                        <button
                            onClick={handleFilter}
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Filter className="w-4 h-4" />
                            Terapkan Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabel Data */}
            <div className="mt-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <LaporanTable
                    tanggalMulai={tanggalMulai}
                    tanggalSelesai={tanggalSelesai}
                    status={status}
                />
            </div>
        </div>
    );
};

export default LaporanPage;
