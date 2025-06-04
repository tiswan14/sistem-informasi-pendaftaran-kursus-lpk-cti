"use client";
import Card from "@/components/user/card";
import { useEffect, useState } from "react";

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
                const res = await fetch("/api/kursus/aktif");
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
            <div className="px-4 py-32">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">Daftar Kursus</h1>

                {loading ? (
                    <div className="flex justify-center items-center py-16">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
                    </div>
                ) : kursusData.length > 0 ? (
                    <div className="grid place-items-center grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {kursusData.map((kursus) => (
                            <Card key={kursus.id} kursus={kursus} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500">Tidak ada data kursus yang tersedia</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default KursusPage;