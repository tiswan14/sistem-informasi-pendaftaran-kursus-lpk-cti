"use client"

// import { Metadata } from "next";
import PesertaTable from "@/components/admin/peserta/peserta-table";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "use-debounce";


// export const metadata: Metadata = {
//     title: "Daftar Peserta - LPK CTI Ciamis",
// };

const PesertaPage = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 500);
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Data Peserta Kursus</h1>
                <div className="relative w-72 max-w-sm">
                    <input
                        type="text"
                        placeholder="Cari peserta..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-[18px] w-[18px] pointer-events-none" />
                </div>

            </div>

            <PesertaTable searchQuery={debouncedSearch} />
        </div>
    );
};

export default PesertaPage;
