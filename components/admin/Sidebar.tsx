"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
    FaTachometerAlt,
    FaUsers,
    FaChalkboardTeacher,
    FaBookOpen,
    FaClipboardList,
    FaCalendarAlt,
    FaCertificate,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-white text-gray-700 flex flex-col h-screen border-r border-gray-100 shadow-sm transition-all duration-300`}>
            {/* Logo dan Judul */}
            <div className={`py-5 px-6 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} border-b border-gray-100`}>
                {!collapsed && (
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Image
                                src="/logo-lpk-cti.png"
                                alt="Logo LPK CTI"
                                width={32}
                                height={32}
                                className="rounded-md"
                            />
                        </div>
                        <span className="text-lg font-semibold text-gray-800">LPK CTI</span>
                    </div>
                )}
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
            </div>

            {/* Navigasi */}
            <nav className="flex-1 px-3 py-6 space-y-1 text-sm">
                <Link href="/dashboard">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition">
                            <FaTachometerAlt className="text-blue-500 group-hover:text-blue-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Dashboard</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-peserta">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all group">
                        <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition">
                            <FaUsers className="text-green-500 group-hover:text-green-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Data Peserta</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-instruktur">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 transition-all group">
                        <div className="p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition">
                            <FaChalkboardTeacher className="text-yellow-500 group-hover:text-yellow-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Data Instruktur</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-kursus">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all group">
                        <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition">
                            <FaBookOpen className="text-purple-500 group-hover:text-purple-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Data Kursus</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-pendaftaran">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all group">
                        <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition">
                            <FaClipboardList className="text-red-500 group-hover:text-red-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Pendaftaran</span>}
                    </div>
                </Link>

                <Link href="/dashboard/jadwal">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition">
                            <FaCalendarAlt className="text-indigo-500 group-hover:text-indigo-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Jadwal</span>}
                    </div>
                </Link>

                <Link href="/dashboard/sertifikat">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-all group">
                        <div className="p-2 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition">
                            <FaCertificate className="text-cyan-500 group-hover:text-cyan-600" />
                        </div>
                        {!collapsed && <span className="font-medium">Sertifikat</span>}
                    </div>
                </Link>

            </nav>

            {/* Footer Sidebar */}
            <div className={`px-4 py-3 border-t border-gray-100 text-xs text-gray-500 ${collapsed ? 'text-center' : ''}`}>
                {!collapsed ? `© ${new Date().getFullYear()} LPK CTI` : '© LPK'}
            </div>
        </aside>
    );
};

export default Sidebar;