import { Metadata } from "next";
import PendaftarTable from "@/components/admin/pendaftar/pendaftar-table";

export const metadata: Metadata = {
    title: "Data Pendaftar Kursus - LPK CTI Ciamis",
};

const PendaftarPage = () => {
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Data Pendaftar Kursus</h1>
            </div>
            <PendaftarTable />
        </div>
    );
};

export default PendaftarPage;
