import KursusTable from "@/components/admin/kursus/kursus-table";
import Link from "next/link";
import { Metadata } from "next";
import { BookPlus } from "lucide-react";

export const metadata: Metadata = {
    title: "Daftar Kursus - LPK CTI Ciamis",
};

const DaftarKursusPage = () => {
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800 block">Daftar Kursus</h1>
            </div>
            <div className="px-3">
                <Link
                    href="/dashboard/data-kursus/tambah"
                    className="inline-flex items-center px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all font-medium shadow-md"
                >
                    <BookPlus className="mr-2 w-4 h-4" />
                    Tambah Kursus
                </Link>
            </div>



            <KursusTable />
        </div>
    );
};

export default DaftarKursusPage;