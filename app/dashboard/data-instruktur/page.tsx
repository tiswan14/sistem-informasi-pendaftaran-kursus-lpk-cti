"use client";

import InstrukturTable from "@/components/admin/instruktur/instruktur-table";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useDebounce } from "use-debounce";

const InstrukturPage = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 500);
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 block">Daftar Instruktur</h1>
                    <div className="pt-4">
                        <Link
                            href="/dashboard/data-instruktur/tambah"
                            className="inline-flex items-center px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all font-medium shadow-md"
                        >
                            <FiUserPlus className="mr-2 w-3.5 h-3.5" />
                            Tambah Instruktur
                        </Link>
                    </div>
                </div>

                <div className="relative w-72">
                    <input
                        type="text"
                        placeholder="Cari instruktur..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-12 pr-4 py-2 w-full rounded-lg bg-white border border-gray-300 text-sm placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 h-[18px] w-[18px]" />
                </div>


            </div>
            <InstrukturTable searchQuery={debouncedSearch} />
        </div>
    );
};

export default InstrukturPage;
