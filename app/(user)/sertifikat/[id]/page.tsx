'use client';

import Sertifikat from '@/components/Sertifikat';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// ✅ Buat interface untuk data sertifikat (sesuaikan dengan struktur data Anda)
interface ISertifikat {
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
    const params = useParams();
    const id = params?.id as string;

    const [sertifikatData, setSertifikatData] = useState<ISertifikat | null>(null);
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

            {loading && <p>Memuat...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && sertifikatData && (
                <Sertifikat
                    nomor={sertifikatData.nomor}
                    tanggalTerbit={sertifikatData.tanggalTerbit}
                    namaPeserta={sertifikatData.pendaftaran?.user?.nama || '-'}
                    namaKursus={sertifikatData.pendaftaran?.kursus?.nama || '-'}
                />
            )}
        </div>
    );
};

export default LihatSertifikatPage;
