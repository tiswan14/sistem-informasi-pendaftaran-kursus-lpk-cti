"use client";
import PesertaDetailSkeleton from "@/components/skeleton/PesertaDetailSkeleton";

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
import { HiArrowLeft } from "react-icons/hi";

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
            <PesertaDetailSkeleton />
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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center mb-10 ">
                <button
                    onClick={() => window.history.back()}
                    className="cursor-pointer flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <HiArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Kembali</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Detail Peserta Kursus</h1>
                <div className="w-10"></div> {/* Spacer for balance */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    <div className="group relative flex items-start p-4 bg-white rounded-xl transition-all duration-300 shadow-xs hover:shadow-md hover:bg-gray-50/80 overflow-hidden">
        {/* Static icon (no hover effects) */}
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
            <Icon className="w-5 h-5 text-blue-600" />
        </div>

        {/* Compact text layout */}
        <div className="flex-1 min-w-0 space-y-0.5">
            <p className="text-xs font-medium text-gray-500 truncate">{label}</p>
            <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
        </div>

        {/* Minimal hover indicator (optional) */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-transparent group-hover:border-gray-200/50"></div>
    </div>
);

export default PesertaDetail;