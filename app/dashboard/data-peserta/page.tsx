import PesertaTable from "@/components/admin/peserta/peserta-table";
import { Suspense } from "react";

const PesertaPage = () => {
    return (
        <div className="max-w-screen-xl px-4">
            <div className="px-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Daftar Peserta</h1>
            </div>
            <Suspense fallback={<div>Loading data...</div>}>
                <PesertaTable />
            </Suspense>
        </div>
    );
};

export default PesertaPage;
