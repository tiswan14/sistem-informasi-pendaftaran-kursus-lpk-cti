'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Award, BadgeCheck, CalendarDays, FileText } from 'lucide-react';
import { fetchSertifikat } from '@/lib/api';

interface SertifikatItem {
    id: string;
    nomor: string;
    tanggalTerbit: string;
    fileUrl: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    createdAt: string;
    updatedAt: string;
    pendaftaran: {
        id: string;
        user: {
            nama: string;
            email: string;
        };
        kursus: {
            nama: string;
        };
    };
}

const SertifikatPage = () => {
    const [sertifikatList, setSertifikatList] = useState<SertifikatItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSertifikat() {
            const data = await fetchSertifikat();
            setSertifikatList(data);
            setLoading(false);
        }

        loadSertifikat();
    }, []);

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-8 pt-24 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-blue-600" />
                    <h1 className="text-3xl font-bold text-gray-800">Sertifikat Saya</h1>
                </div>
                <p className="text-gray-600 text-lg">Daftar sertifikat yang telah Anda peroleh</p>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <p className="mt-4 text-gray-500">Memuat sertifikat...</p>
                </div>
            ) : sertifikatList.length === 0 ? (
                <p className="text-center text-gray-500">Belum ada sertifikat yang tersedia.</p>
            ) : (
                <div className="space-y-3">
                    {sertifikatList.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-full">
                                        <BadgeCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">
                                            {item.pendaftaran.kursus.nama}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays className="w-4 h-4 text-gray-400" />
                                                Diterbitkan:{' '}
                                                {new Date(item.tanggalTerbit).toLocaleDateString('id-ID')}
                                            </span>
                                            <span className="hidden md:block text-gray-300">|</span>
                                            <span>No. {item.nomor}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={`/sertifikat/${item.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-sm"
                            >
                                <FileText className="w-4 h-4" />
                                Lihat Sertifikat
                            </Link>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SertifikatPage;
