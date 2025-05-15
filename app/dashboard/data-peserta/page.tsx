import { Metadata } from "next";
import PesertaTable from "@/components/admin/peserta/peserta-table";

export const metadata: Metadata = {
    title: "Daftar Peserta - LPK CTI Ciamis",
};

const PesertaPage = () => {
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Daftar Peserta</h1>
            </div>
            <PesertaTable />
        </div>
    );
};

export default PesertaPage;
