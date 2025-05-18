"use client"; // Supaya bisa pakai hook React seperti useState, useEffect

import InstrukturTable from "@/components/admin/instruktur/instruktur-table";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

const InstrukturPage = () => {
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800 block">Daftar Instruktur</h1>
                <div className="px-3">
                    <Link
                        href="/dashboard/data-instruktur/tambah"
                        className="inline-flex items-center px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all font-medium shadow-md"
                    >
                        <FiUserPlus className="mr-2 w-3.5 h-3.5" />
                        Tambah Instruktur
                    </Link>
                </div>
            </div>
            <InstrukturTable />
        </div>
    );
};

export default InstrukturPage;
