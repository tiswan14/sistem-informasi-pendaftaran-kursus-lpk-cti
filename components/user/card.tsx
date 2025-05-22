import Link from "next/link";
import { Bookmark, UserCircle, IndianRupee, Users, ArrowRight } from 'lucide-react';

interface Kursus {
    id: string;
    nama: string;
    harga: number;
    createdAt: string;
    kapasitas?: number; // misal kalau ada data kapasitas
}

interface CardProps {
    kursus: Kursus;
}

const formatCurrency = (value: number) => {
    return value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
};

const Card = ({ kursus }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-200 hover:border-blue-200 w-full max-w-xs">
            {/* Content */}
            <div className="p-4 flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 truncate">
                        <Link href={`/kursus/${kursus.id}`}>
                            {kursus.nama}
                        </Link>
                    </h3>
                </div>

                <div className="flex items-center mb-3 gap-2">
                    <UserCircle className="text-gray-500" size={18} />
                    <p className="text-gray-700 font-medium">
                        {kursus.user.nama}
                    </p>
                </div>

                <div className="flex items-center mb-3 gap-2">
                    <p className="text-gray-700 font-bold">
                        {formatCurrency(kursus.harga)}
                        <span className="text-gray-500 text-sm ml-1">/bulan</span>
                    </p>
                </div>

                {kursus.kapasitas !== undefined && (
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                        <Users className="text-gray-500" size={16} />
                        <span>{kursus.kapasitas} peserta tersisa</span>
                    </div>
                )}
            </div>

            {/* Footer with interactive button */}
            <div className="px-4 pb-4">
                <Link
                    href={`/kursus/${kursus.id}`}
                    className="group inline-flex items-center justify-center w-full text-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm shadow-sm"
                >
                    Lihat Detail
                    <ArrowRight className="ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200" size={16} />
                </Link>
            </div>
        </div>
    );
};

export default Card;
