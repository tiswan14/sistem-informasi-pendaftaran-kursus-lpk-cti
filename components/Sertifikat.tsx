"use client";

import { useRef } from "react";
import * as domtoimage from 'dom-to-image';
import jsPDF from "jspdf";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import { Award } from "lucide-react";

interface Props {
    nomor: string;
    tanggalTerbit: string;
    namaPeserta: string;
    namaKursus: string;
}

export default function Sertifikat({ nomor, tanggalTerbit, namaPeserta, namaKursus }: Props) {
    const sertifikatRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!sertifikatRef.current) return;

        try {
            // 1. Hitung rasio yang tepat
            const element = sertifikatRef.current;
            const width = element.offsetWidth;
            const height = element.offsetHeight;

            // 2. Konversi ke PNG dengan ukuran presisi
            const dataUrl = await domtoimage.toPng(element, {
                quality: 1,
                bgcolor: '#ffffff',
                width: width,
                height: height,
                style: {
                    transform: 'scale(1)',
                    transformOrigin: 'top left'
                }
            });

            // 3. Buat PDF dengan orientasi landscape
            const pdf = new jsPDF({
                orientation: "landscape",
                unit: "mm",
                format: "a4"
            });

            // 4. Hitung posisi untuk center-kan gambar
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const x = 0;
            const y = 0;

            // 5. Tambahkan gambar
            pdf.addImage(dataUrl, 'PNG', x, y, pdfWidth, pdfHeight);

            // 6. Download
            pdf.save(`Sertifikat-${namaPeserta}-${namaKursus}-LPK Cipta Tungga Indonesia.pdf`);

        } catch (error) {
            console.error("Error:", error);
            alert("Gagal mengunduh. Coba lagi atau hubungi admin.");
        }
    };

    return (
        <div className="p-2 pt-6 sm:p-4 sm:py-14 flex flex-col items-center">
            {/* --- ELEMEN SERTIFIKAT --- */}
            <div
                ref={sertifikatRef}
                className="w-full max-w-[842px] bg-white relative overflow-hidden border border-gray-100 shadow-xl aspect-[4/3] sm:aspect-[842/595]"
                style={{
                    fontFamily: "'Crimson Text', serif",
                    background: "linear-gradient(to bottom, #f9fafb, #ffffff)"
                }}
            >
                {/* Border Header */}
                <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-emerald-500 to-blue-600"></div>

                {/* Corner Borders */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-blue-600 sm:top-8 sm:left-8 sm:w-16 sm:h-16"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-emerald-500 sm:top-8 sm:right-8 sm:w-16 sm:h-16"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-emerald-500 sm:bottom-8 sm:left-8 sm:w-16 sm:h-16"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-blue-600 sm:bottom-8 sm:right-8 sm:w-16 sm:h-16"></div>

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <div className="text-[40px] sm:text-[180px] font-bold text-gray-400 rotate-[-12deg]">CTI</div>
                </div>

                {/* Isi Sertifikat */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-3 sm:px-20 py-6 sm:py-12 text-center">
                    <div className="mb-3 sm:mb-10">
                        <p className="text-[10px] sm:text-sm text-gray-500 tracking-widest mb-1">LPK Cipta Tungga Indonesia</p>
                        <h1 className="text-xl sm:text-4xl font-bold text-gray-800 mb-1">SERTIFIKAT KOMPETENSI</h1>
                        <div className="w-12 sm:w-24 h-0.5 sm:h-1 mx-auto bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                    </div>

                    <div className="w-14 sm:w-24 h-14 sm:h-24 rounded-full border-2 sm:border-4 border-emerald-400 flex items-center justify-center mb-5 sm:mb-8">
                        <svg className="w-6 sm:w-12 h-6 sm:h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>

                    <div className="mb-4 sm:mb-8">
                        <p className="text-xs text-gray-500 mb-1">Diberikan kepada:</p>
                        <h2 className="text-lg sm:text-3xl font-semibold text-gray-800">{namaPeserta}</h2>
                    </div>

                    <div className="w-full max-w-sm border-y border-gray-200 py-3 sm:py-6 mb-5 sm:mb-8">
                        <p className="text-xs text-gray-500 mb-1">Telah menyelesaikan program pelatihan:</p>
                        <h3 className="text-sm sm:text-xl font-medium text-blue-600">{namaKursus}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-sm mb-5 sm:mb-12">
                        <div>
                            <p className="text-[10px] text-gray-400 mb-1">TANGGAL TERBIT</p>
                            <p className="text-xs">{formatTanggalIndonesia(tanggalTerbit)}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 mb-1">NOMOR SERTIFIKAT</p>
                            <p className="text-xs font-mono">{nomor}</p>
                        </div>
                    </div>

                    <div className="flex justify-between w-full px-4 sm:px-12">
                        <div className="text-center">
                            <div className="h-0.5 w-12 sm:w-32 bg-gray-300 mx-auto mb-1"></div>
                            <p className="text-xs text-gray-500">Direktur LPK CTI</p>
                        </div>
                        <div className="text-center">
                            <div className="h-0.5 w-12 sm:w-32 bg-gray-300 mx-auto mb-1"></div>
                            <p className="text-xs text-gray-500">Ketua Program Pelatihan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol Unduh */}
            <button
                onClick={handleDownload}
                className="cursor-pointer group mt-4 sm:mt-8 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
            >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">Unduh Sertifikat</span>
            </button>
        </div>


    );
}