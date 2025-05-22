import { useEffect, useState } from "react";

interface Kursus {
    id: string;
    nama: string;
    deskripsi: string | null;
    harga: number;
    lamaKursus: number | null;
    tanggalMulai: string | null;   // simpan sebagai string format YYYY-MM-DD atau null
    tanggalSelesai: string | null; // simpan sebagai string format YYYY-MM-DD atau null
    userId: string | null;
}

interface EditKursusFormProps {
    initialData: Kursus;
    user?: {
        id: string;
        name: string;
    };
    onSuccess?: () => void;
    onCancel?: () => void;
}

const EditKursusForm: React.FC<EditKursusFormProps> = ({
    initialData,
    user,
    onSuccess,
    onCancel,
}) => {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState(0);
    const [lamaKursus, setLamaKursus] = useState<number | "">(0);
    const [tanggalMulai, setTanggalMulai] = useState("");
    const [tanggalSelesai, setTanggalSelesai] = useState("");
    const [userId, setUserId] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (initialData) {
            setNama(initialData.nama);
            setDeskripsi(initialData.deskripsi || "");
            setHarga(initialData.harga);
            setLamaKursus(initialData.lamaKursus ?? "");
            setTanggalMulai(initialData.tanggalMulai ?? "");
            setTanggalSelesai(initialData.tanggalSelesai ?? "");
            setUserId(initialData.userId ?? "");
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);
        setError("");

        try {
            const response = await fetch(`/api/kursus/${initialData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama,
                    deskripsi,
                    harga,
                    lamaKursus: lamaKursus === "" ? null : Number(lamaKursus),
                    tanggalMulai: tanggalMulai || null,
                    tanggalSelesai: tanggalSelesai || null,
                    userId: user?.id || userId || null,
                }),
            });

            if (!response.ok) {
                throw new Error("Gagal memperbarui kursus");
            }

            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Terjadi kesalahan");
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Edit Kursus</h1>

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-gray-700 mb-2">
                        Nama Kursus
                    </label>
                    <input
                        id="nama"
                        type="text"
                        className="w-full p-2 border rounded"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="deskripsi" className="block text-gray-700 mb-2">
                        Deskripsi
                    </label>
                    <textarea
                        id="deskripsi"
                        className="w-full p-2 border rounded"
                        rows={4}
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="harga" className="block text-gray-700 mb-2">
                            Harga
                        </label>
                        <input
                            id="harga"
                            type="number"
                            className="w-full p-2 border rounded"
                            value={harga}
                            onChange={(e) => setHarga(Number(e.target.value))}
                            required
                            min={0}
                        />
                    </div>

                    <div>
                        <label htmlFor="lamaKursus" className="block text-gray-700 mb-2">
                            Lama Kursus (hari)
                        </label>
                        <input
                            id="lamaKursus"
                            type="number"
                            className="w-full p-2 border rounded"
                            value={lamaKursus}
                            onChange={(e) =>
                                setLamaKursus(e.target.value === "" ? "" : Number(e.target.value))
                            }
                            min={1}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="tanggalMulai" className="block text-gray-700 mb-2">
                            Tanggal Mulai
                        </label>
                        <input
                            id="tanggalMulai"
                            type="date"
                            className="w-full p-2 border rounded"
                            value={tanggalMulai}
                            onChange={(e) => setTanggalMulai(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="tanggalSelesai" className="block text-gray-700 mb-2">
                            Tanggal Selesai
                        </label>
                        <input
                            id="tanggalSelesai"
                            type="date"
                            className="w-full p-2 border rounded"
                            value={tanggalSelesai}
                            onChange={(e) => setTanggalSelesai(e.target.value)}
                        />
                    </div>
                </div>

                {!user && (
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-gray-700 mb-2">
                            ID Instruktur
                        </label>
                        <input
                            id="userId"
                            type="text"
                            className="w-full p-2 border rounded"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                )}

                <div className="flex justify-end space-x-2 mt-6">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        disabled={isUpdating}
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        disabled={isUpdating}
                    >
                        {isUpdating ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditKursusForm;
