"use client"
import PembayaranTable from "@/components/admin/pembayaran/pembayaran-table";

const PembayaranPage = () => {

    return (
        <div className="max-w-screen-xl px-4 ">
            <div className="px-3 flex items-center justify-between mb-10">
                <h1 className="text-2xl font-bold text-gray-800">Data Pembayaran Kursus</h1>
            </div>
            <PembayaranTable />
        </div>
    );
};

export default PembayaranPage;
