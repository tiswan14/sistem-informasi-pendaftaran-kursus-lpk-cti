"use client";

import { useRef } from "react";
import * as domtoimage from 'dom-to-image';
import jsPDF from "jspdf";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import { Award, DownloadCloud } from "lucide-react";

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
            const ratio = height / width;

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
        <div className="p-4 flex flex-col items-center">
            {/* --- ELEMEN SERTIFIKAT --- */}
            <div
                ref={sertifikatRef}
                className="w-[842px] h-[595px] bg-white relative overflow-hidden border border-gray-100 shadow-xl"
                style={{
                    fontFamily: "'Crimson Text', serif",
                    background: "linear-gradient(to bottom, #f9fafb, #ffffff)"
                }}
            >
                {/* Header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-600"></div>

                {/* Corner Designs */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-600"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-emerald-500"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-emerald-500"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-600"></div>

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <div className="text-[180px] font-bold text-gray-400 rotate-[-12deg]">CTI</div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-20 py-12 text-center">
                    <div className="mb-10">
                        <p className="text-sm text-gray-500 tracking-widest mb-2">LPK Cipta Tungga Indonesia</p>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">SERTIFIKAT KOMPETENSI</h1>
                        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                    </div>

                    <div className="w-24 h-24 rounded-full border-4 border-emerald-400 flex items-center justify-center mb-8">
                        <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>

                    <div className="mb-8">
                        <p className="text-sm text-gray-500 mb-3">Diberikan kepada:</p>
                        <h2 className="text-3xl font-semibold text-gray-800">{namaPeserta}</h2>
                    </div>

                    <div className="w-full max-w-lg border-y border-gray-200 py-6 mb-8">
                        <p className="text-sm text-gray-500 mb-2">Telah menyelesaikan program pelatihan:</p>
                        <h3 className="text-xl font-medium text-blue-600">{namaKursus}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full max-w-md mb-12">
                        <div>
                            <p className="text-xs text-gray-400 mb-1">TANGGAL TERBIT</p>
                            <p className="text-sm">{formatTanggalIndonesia(tanggalTerbit)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mb-1">NOMOR SERTIFIKAT</p>
                            <p className="text-sm font-mono">{nomor}</p>
                        </div>
                    </div>

                    <div className="flex justify-between w-full px-12">
                        <div className="text-center">
                            <div className="h-0.5 w-32 bg-gray-300 mx-auto mb-1"></div>
                            <p className="text-xs text-gray-500">Direktur LPK CTI</p>
                        </div>
                        <div className="text-center">
                            <div className="h-0.5 w-32 bg-gray-300 mx-auto mb-1"></div>
                            <p className="text-xs text-gray-500">Ketua Program Pelatihan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TOMBOL DOWNLOAD --- */}
            <button
                onClick={handleDownload}
                className="cursor-pointer group mt-8 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-blue-700 hover:to-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
                <Award className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">Unduh Sertifikat</span>
            </button>
        </div>
    );
}