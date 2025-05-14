"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaTachometerAlt,
    FaUsers,
    FaChalkboardTeacher,
    FaBookOpen,
    FaClipboardList,
    FaCalendarAlt,
    FaCertificate,
    FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#f5f5f5] text-gray-800 flex flex-col h-screen shadow-md border-r border-gray-200">
            {/* Logo dan Judul */}
            <div className="py-6 px-6 flex items-center gap-3 bg-[#eaeaea] border-b border-gray-300">
                <Image src="/logo-lpk-cti.png" alt="Logo" width={40} height={40} className="rounded-full" />
                <span className="text-xl font-bold text-gray-900">LPK CTI</span>
            </div>

            {/* Navigasi */}
            <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
                <Link href="/dashboard">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaTachometerAlt />
                        Dashboard
                    </div>
                </Link>

                <Link href="/dashboard/data-peserta">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaUsers />
                        Data Peserta
                    </div>
                </Link>

                <Link href="/dashboard/instruktur">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaChalkboardTeacher />
                        Data Instruktur
                    </div>
                </Link>

                <Link href="/dashboard/courses">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaBookOpen />
                        Data Kursus
                    </div>
                </Link>



                <Link href="/dashboard/pendaftaran">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaClipboardList />
                        Pendaftaran
                    </div>
                </Link>

                <Link href="/dashboard/jadwal">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaCalendarAlt />
                        Jadwal
                    </div>
                </Link>

                <Link href="/dashboard/sertifikat">
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition">
                        <FaCertificate />
                        Sertifikat
                    </div>
                </Link>
            </nav>

            {/* Logout */}
            <div className="p-4">
                <button className="w-full flex items-center justify-center gap-2 p-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
