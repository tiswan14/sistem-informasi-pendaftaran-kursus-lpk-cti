"use client"
import Sertifikat from '@/components/Sertifikat';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Sertifikat {
    nomor: string;
    tanggalTerbit: string;
    pendaftaran?: {
        user?: {
            nama?: string;
        };
        kursus?: {
            nama?: string;
        };
    };
}


const LihatSertifikatPage = () => {
    const { id } = useParams();
    const [sertifikatData, setSertifikatData] = useState<Sertifikat | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/sertifikat/${id}`);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data sertifikat');
                }
                const data = await response.json();
                setSertifikatData(data);
                console.log(data);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
                toast.error('Gagal memuat data sertifikat');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Detail Sertifikat</h1>

            {sertifikatData ? (
                <Sertifikat
                    nomor={sertifikatData.nomor}
                    tanggalTerbit={sertifikatData.tanggalTerbit}
                    namaPeserta={sertifikatData.pendaftaran?.user?.nama || '-'}
                    namaKursus={sertifikatData.pendaftaran?.kursus?.nama || '-'}
                />
            ) : loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : null}

        </div>
    )
}

export default LihatSertifikatPage
