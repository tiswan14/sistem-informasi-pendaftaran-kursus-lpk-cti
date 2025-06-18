"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    BookOpen,
    Calendar,
    Clock,
    DollarSign,
    Loader2,
    User,
    AlertCircle,
    Users,
    CheckCircle,
    Image as ImageIcon,
} from "lucide-react";
import { formatTanggalIndonesia } from "@/utils/formatTanggal";
import Image from "next/image";

const InfoItem = ({ icon, title, value }) => (
    <div className="flex items-start space-x-3">
        <div className="p-2 bg-blue-100 rounded-md">{icon}</div>
        <div>
            <p className="text-gray-500">{title}</p>
            <p className="font-semibold text-gray-800">{value}</p>
        </div>
    </div>
);


const KursusDetailPage = () => {
    const params = useParams();
    const id = params.id;

    const [kursus, setKursus] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchKursus = async () => {
            try {
                const res = await fetch(`/api/kursus/detail/${id}`);
                if (!res.ok) {
                    throw new Error(`Kursus tidak ditemukan (status ${res.status})`);
                }
                const data = await res.json();
                setKursus(data);
            } catch (err: any) {
                setError(err.message || "Terjadi kesalahan saat mengambil data kursus");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchKursus();
        }
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Memuat Detail Kursus</h3>
                <p className="mt-2 text-gray-600">Harap tunggu sebentar...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Terjadi Kesalahan</h3>
                <p className="mt-2 text-gray-600">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Coba Lagi
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen py-2 px-2 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="p-6 text-center bg-blue-600 text-white">
                        <h1 className="text-2xl font-bold flex items-center justify-center mb-1">
                            <BookOpen className="mr-2 h-6 w-6 text-white" />
                            Detail Kursus
                        </h1>
                        <p className="text-sm opacity-90">
                            Informasi lengkap tentang kursus <strong>{kursus.nama}</strong>
                        </p>
                    </div>

                    {/* Main Info */}
                    <div className="p-6 space-y-6 text-gray-800 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                            <InfoItem icon={<DollarSign className="text-blue-600" />} title="Harga Kursus" value={kursus.harga} />
                            <InfoItem icon={<Clock className="text-blue-600" />} title="Durasi" value={`${kursus.lamaKursus} bulan`} />
                            <InfoItem icon={<Users className="text-blue-600" />} title="Kuota" value={`${kursus.kuota} peserta`} />
                            <InfoItem icon={<Calendar className="text-blue-600" />} title="Mulai" value={formatTanggalIndonesia(kursus.tanggalMulai)} />
                            <InfoItem icon={<Calendar className="text-blue-600" />} title="Selesai" value={formatTanggalIndonesia(kursus.tanggalSelesai)} />
                            <InfoItem icon={<User className="text-blue-600" />} title="Instruktur" value={kursus.user.nama} />
                            <InfoItem
                                icon={<CheckCircle className={`${kursus.status === 'aktif' ? 'text-green-500' : 'text-red-500'}`} />}
                                title="Status"
                                value={
                                    <span className={`capitalize font-medium ${kursus.status === 'aktif' ? 'text-green-600' : 'text-red-600'}`}>
                                        {kursus.status}
                                    </span>
                                }
                            />
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <h3 className="text-sm font-medium flex items-center text-gray-700 mb-2">
                                <ImageIcon className="h-4 w-4 mr-2 text-blue-600" />
                                Thumbnail Kursus
                            </h3>

                            {kursus.thumbnail ? (
                                <div className="inline-block border border-gray-200 bg-gray-100 rounded-md overflow-hidden">
                                    {loading && (
                                        <div className="flex items-center justify-center w-full h-full p-8 text-blue-500 text-sm">
                                            Loading...
                                        </div>
                                    )}
                                    <Image
                                        src={kursus.thumbnail}
                                        alt={`Thumbnail ${kursus.nama}`}
                                        onLoad={() => setLoading(false)}
                                        width={0} // <- Ini biar ukurannya fleksibel
                                        height={0}
                                        sizes="100vw" // <- Ikuti ukuran layar
                                        className={`h-auto w-auto max-w-full max-h-80 object-contain transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                </div>



                            ) : (
                                <div className="bg-gray-100 h-60 rounded-md flex items-center justify-center text-gray-500 italic border border-gray-200">
                                    Tidak ada thumbnail
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-gray-50 text-right">
                        <button className="px-4 py-2 text-sm font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-150">
                            Kembali
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default KursusDetailPage;