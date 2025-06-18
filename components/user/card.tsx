/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { UserCircle, Users, ArrowRight } from 'lucide-react';
import Image from "next/image";

interface Kursus {
    [x: string]: any;
    id: string;
    nama: string;
    harga: number;
    createdAt: string;
    kapasitas?: number;
    thumbnail?: string;
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
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-200 hover:border-blue-500/30 w-full max-w-xs overflow-hidden">
            {/* Thumbnail section - improved aspect ratio */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {kursus.thumbnail ? (
                    <Image
                        src={kursus.thumbnail}
                        alt={`${kursus.nama} Thumbnail`}
                        width={320}
                        height={180}  // 16:9 aspect ratio (320x180)
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50">
                        <p className="text-gray-400 text-sm">Thumbnail tidak tersedia</p>
                    </div>
                )}
            </div>

            {/* Content section */}
            <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        <Link href={`/kursus/${kursus.id}`}>
                            {kursus.nama}
                        </Link>
                    </h3>
                </div>

                {/* Improved instructor section */}
                <div className="flex items-center mb-3 gap-2">
                    <div className="flex-shrink-0 text-gray-500">
                        <UserCircle size={20} />
                    </div>
                    <p className="text-gray-600 text-sm">
                        {kursus.user.nama}
                    </p>
                </div>

                <div className="mt-auto">
                    <div className="flex items-center mb-3 gap-2">
                        <p className="text-gray-900 font-semibold text-lg">
                            {formatCurrency(kursus.harga)}
                            <span className="text-gray-500 font-normal text-sm ml-1">/bulan</span>
                        </p>
                    </div>

                    {kursus.kapasitas !== undefined && (
                        <div className="flex items-center text-gray-600 text-sm gap-2 mb-4">
                            <Users className="text-gray-500" size={16} />
                            <span>{kursus.kapasitas} peserta tersisa</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer with interactive button */}
            <div className="px-4 pb-4">
                <Link
                    href={`/kursus/${kursus.id}`}
                    className="group inline-flex items-center justify-center w-full text-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                >
                    Lihat Detail
                    <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" size={16} />
                </Link>
            </div>
        </div>
    );
};

export default Card;
