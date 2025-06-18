"use client";

import JadwalTable from "@/components/admin/jadwal/jadwal-table";
import { FiCalendar, FiUserPlus } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";



const DaftarJadwalPage = () => {
    const [filterHari, setFilterHari] = useState("");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterHari(e.target.value);
    };

    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex mb-6 justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Daftar Jadwal</h1>

                    <Link
                        href="/dashboard/data-jadwal/tambah"
                        className="inline-flex items-center px-4 py-2 text-sm bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all font-medium shadow-md w-full sm:w-auto"
                    >
                        <FiCalendar className="mr-2 w-3.5 h-3.5" />
                        Tambah Jadwal
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="flex gap-3 items-center w-full sm:w-auto">
                        <select
                            onChange={handleSortChange}
                            value={filterHari}
                            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 w-full sm:w-auto"
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
            </div>


            <JadwalTable filterHari={filterHari} />
        </div>
    );
};

export default DaftarJadwalPage;
