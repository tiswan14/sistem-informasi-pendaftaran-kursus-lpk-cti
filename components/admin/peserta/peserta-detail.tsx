"use client";

import React, { useEffect, useState } from "react";
import {
    User,
    CreditCard,
    UserCircle,
    MapPin,
    Calendar,
    Book,
    Phone,
    Mail,
    Instagram,
    GraduationCap,
    Landmark,
} from "lucide-react";

import { HiArrowLeft } from "react-icons/hi"
interface Peserta {
    nama: string;
    nik: string;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir: string;
    agama: string;
    jurusan: string;
    tahunAkademik: string;
    noHp: string;
    email: string;
    mediaSosial?: string | null;
}

interface PesertaDetailProps {
    pesertaId: string;
}

const PesertaDetail: React.FC<PesertaDetailProps> = ({ pesertaId }) => {
    const [peserta, setPeserta] = useState<Peserta | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPeserta = async () => {
            try {
                const res = await fetch(`/api/peserta/${pesertaId}`);
                if (!res.ok) {
                    throw new Error(`Peserta tidak ditemukan (status ${res.status})`);
                }
                const data = await res.json();
                setPeserta(data.peserta);
            } catch (err: any) {
                setError(err.message || "Terjadi kesalahan saat mengambil data peserta");
            } finally {
                setLoading(false);
            }
        };

        fetchPeserta();
    }, [pesertaId]);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                {error}
            </div>
        );
    }

    if (!peserta) {
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                Peserta tidak ditemukan
            </div>
        );
    }

    const dataItems = [
        { label: "Nama", value: peserta.nama, icon: User },
        { label: "NIK", value: peserta.nik, icon: CreditCard },
        { label: "Jenis Kelamin", value: peserta.jenisKelamin, icon: UserCircle },
        { label: "Tempat Lahir", value: peserta.tempatLahir, icon: MapPin },
        { label: "Tanggal Lahir", value: peserta.tanggalLahir, icon: Calendar },
        { label: "Agama", value: peserta.agama, icon: Landmark },
        { label: "Jurusan", value: peserta.jurusan, icon: Book },
        { label: "Tahun Akademik", value: peserta.tahunAkademik, icon: GraduationCap },
        { label: "No HP", value: peserta.noHp, icon: Phone },
        { label: "Email", value: peserta.email, icon: Mail },
        { label: "Media Sosial", value: peserta.mediaSosial || "-", icon: Instagram },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Detail Peserta Kursus</h1>
            <div className="flex justify-between mb-6">
                <button
                    onClick={() => window.history.back()}
                    className="px-3 py-2 bg-white rounded hover:bg-gray-300 flex items-center justify-center"
                    aria-label="Kembali"
                >
                    <HiArrowLeft className="w-5 h-5 text-gray-700" />
                </button>


            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
                {dataItems.map((item, idx) => (
                    <DetailItem key={idx} label={item.label} value={item.value} Icon={item.icon} />
                ))}
            </div>
        </div>
    );
};

const DetailItem = ({
    label,
    value,
    Icon,
}: {
    label: string;
    value: string;
    Icon: React.ElementType;
}) => (
    <div className="flex items-start space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all shadow-sm">
        <Icon className="w-5 h-5 text-blue-600 mt-1" />
        <div className="flex flex-col">
            <span className="text-xs text-gray-500">{label}</span>
            <span className="font-medium text-gray-800">{value}</span>
        </div>
    </div>
);

export default PesertaDetail;

