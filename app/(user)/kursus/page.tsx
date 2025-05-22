"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Card from "@/components/user/card";
import { useEffect, useState } from "react";
import { BookOpen, UserCircle2, ClipboardCheck, Building2, Lightbulb, Zap } from 'lucide-react';

interface Kursus {
    id: string;
    nama: string;
    harga: number;
    createdAt: string;
}

const KursusPage = () => {
    const [kursusData, setKursusData] = useState<Kursus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await fetch("/api/kursus");
                if (!res.ok) throw new Error("Gagal memuat data kursus");
                const data: Kursus[] = await res.json();
                setKursusData(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchKursus();
    }, []);

    return (
        <>
            <Navbar />
            <div className="px-4 py-32">
                <div className="text-center mb-16 px-4 py-8 bg-gradient-to-b from-blue-50 to-white rounded-xl">
                    <div className="inline-flex items-center mb-6 px-4 py-2 bg-blue-100 rounded-full">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="font-medium text-blue-700">KURSUS & PKL PROFESIONAL</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        <span className="text-blue-600">Pelatihan IT Komprehensif</span> <br />
                        dengan Sertifikasi + Pengalaman Kerja Langsung
                    </h1>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                            <UserCircle2 className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                            <h3 className="font-semibold mb-2">Kurikulum Industri</h3>
                            <p className="text-gray-600 text-sm">Materi sesuai kebutuhan perusahaan saat ini</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                            <ClipboardCheck className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                            <h3 className="font-semibold mb-2">Sertifikasi BNSP</h3>
                            <p className="text-gray-600 text-sm">Sertifikat kompetensi resmi pemerintah</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                            <Building2 className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                            <h3 className="font-semibold mb-2">Program PKL</h3>
                            <p className="text-gray-600 text-sm">Pengalaman kerja langsung di perusahaan</p>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto bg-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 font-medium flex items-center justify-center space-x-2">
                            <Zap className="w-5 h-5 text-blue-600" />
                            <span>Program <span className="font-semibold text-blue-600">Kursus + PKL</span> dengan jaminan sertifikasi kompetensi</span>
                        </p>
                    </div>
                </div>


                <div className="grid place-items-center grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {kursusData.map((kursus) => (
                        <Card key={kursus.id} kursus={kursus} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default KursusPage;
