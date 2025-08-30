/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { UserCircle, Users, ArrowRight, Star, BookOpen, AlertCircle, AlertCircleIcon } from 'lucide-react';
import Image from "next/image";

interface Kursus {
    [x: string]: any;
    id: string;
    nama: string;
    harga: number;
    createdAt: string;
    kuota?: number;
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
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-blue-400 w-full max-w-xs overflow-hidden group">
            {/* Gambar Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
                {kursus.thumbnail ? (
                    <Image
                        src={kursus.thumbnail}
                        alt={`Thumbnail ${kursus.nama}`}
                        width={320}
                        height={180}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="text-gray-300" size={32} />
                    </div>
                )}
                {kursus.kuota !== undefined && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        {kursus.kuota === 0 ? (
                            <>
                                <AlertCircleIcon size={14} className="text-red-600" />
                                <span className="text-xs font-medium text-red-600">Penuh</span>
                            </>
                        ) : (
                            <>
                                <Users size={14} className="text-blue-600" />
                                <span className="text-xs font-medium text-gray-700">
                                    {kursus.kuota} tersisa
                                </span>
                            </>
                        )}
                    </div>
                )}


            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        <Link href={`/kursus/${kursus.id}`}>
                            {kursus.nama}
                        </Link>
                    </h3>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4 gap-2">
                    <div className="flex items-center">
                        <UserCircle size={18} className="text-gray-500 mr-1" />
                        <span className="text-gray-600">{kursus.user.nama}</span>
                    </div>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <p className="font-bold text-gray-900 text-lg">
                            {formatCurrency(kursus.harga)}
                            <span className="text-sm text-gray-500 ml-1">/bulan</span>
                        </p>

                        {kursus.diskon && (
                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                                Diskon {kursus.diskon}%
                            </span>
                        )}
                    </div>

                    {/* Tombol Daftar */}
                    <Link
                        href={kursus.kuota === 0 ? "#" : `/kursus/${kursus.id}`}
                        className={`w-full inline-flex items-center justify-center px-4 py-3 
    font-semibold text-sm rounded-lg shadow-md transition-all duration-200 
    group-hover:shadow-lg
    ${kursus.kuota === 0
                                ? "bg-gray-400 cursor-not-allowed pointer-events-none text-gray-200"
                                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                            }`}
                    >
                        {kursus.kuota === 0 ? "Kuota Penuh" : "Daftar Kursus"}
                        {kursus.kuota !== 0 && (
                            <ArrowRight
                                className="ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                                size={16}
                            />
                        )}
                    </Link>

                </div>
            </div>
        </div>
    );
};


export default Card;
