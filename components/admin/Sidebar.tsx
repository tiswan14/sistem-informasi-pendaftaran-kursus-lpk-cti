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
    FaChevronRight,
    FaMoneyBillAlt,
    FaRegFilePdf,
} from "react-icons/fa";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-white text-gray-700 flex flex-col fixed h-screen border-r border-gray-200 transition-all duration-300`}>
            {/* Logo and Title */}
            <div className={`py-4 px-5 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} border-b border-gray-200 h-[78px]`}>
                {!collapsed && (
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
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
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-5 py-3 overflow-y-auto space-y-1.5">
                <Link href="/dashboard">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                            <FaTachometerAlt size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Dashboard</span>}
                    </div>
                </Link>


                <Link href="/dashboard/data-peserta">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                            <FaUsers size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Peserta</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-instruktur">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-yellow-100 rounded-lg text-yellow-600">
                            <FaChalkboardTeacher size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Instruktur</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-kursus">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
                            <FaBookOpen size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Kursus</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-pendaftaran">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-red-100 rounded-lg text-red-600">
                            <FaClipboardList size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Pendaftaran</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-pembayaran">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                            <FaMoneyBillAlt size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Pembayaran</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-jadwal">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                            <FaCalendarAlt size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Jadwal</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-sertifikat">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="p-1.5 bg-cyan-100 rounded-lg text-cyan-600">
                            <FaCertificate size={14} />
                        </div>
                        {!collapsed && <span className="text-sm font-medium text-gray-700">Data Sertifikat</span>}
                    </div>
                </Link>

                <Link href="/dashboard/data-laporan">
                    <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-blue-50 transition-colors group">
                        <div className="p-1.5 bg-red-100 rounded-lg text-red-600 group-hover:bg-red-200">
                            <FaRegFilePdf size={16} />
                        </div>
                        {!collapsed && (
                            <span className="text-sm font-medium text-gray-800 group-hover:text-red-700">
                                Data Laporan
                            </span>
                        )}
                    </div>
                </Link>
            </nav>


            {/* Footer Sidebar */}
            <div className={`px-4 py-3 border-t border-gray-200 text-xs text-gray-500 ${collapsed ? 'text-center' : ''}`}>
                {!collapsed ? `© ${new Date().getFullYear()} LPK CTI` : '© LPK'}
            </div>
        </aside>
    );
};

export default Sidebar;