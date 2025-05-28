"use client"

import { useEffect, useState } from "react";
import axios from "axios";

const PembayaranPage = () => {
    const [metode, setMetode] = useState("Manual");
    const [buktiBayar, setBuktiBayar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pendaftaran, setPendaftaran] = useState(null);

    // Simulasi fetch data pendaftaran
    useEffect(() => {
        // Ganti dengan data asli dari API atau props
        setPendaftaran({
            id: "cmaz5qstz0002cc2ofksmqy1g",
            kursus: {
                nama: "ReactJS Beginner",
                harga: 1500000,
            },
        });
    }, []);

    const handleSubmit = async () => {
        setLoading(true);

        if (metode === "Manual") {
            const formData = new FormData();
            formData.append("pendaftaranId", pendaftaran.id);
            formData.append("metode", "Manual");
            formData.append("jumlah", pendaftaran.kursus.harga);
            formData.append("buktiBayar", buktiBayar);

            await axios.post("/api/pembayaran/manual", formData);
            alert("Pembayaran manual berhasil diunggah.");
        } else if (metode === "Midtrans") {
            const res = await axios.post("/api/pembayaran/midtrans", {
                pendaftaranId: pendaftaran.id,
                jumlah: pendaftaran.kursus.harga,
                metode: "Midtrans",
            });

            window.snap.pay(res.data.snapToken, {
                onSuccess: (result) => {
                    console.log("Pembayaran berhasil", result);
                },
                onPending: (result) => {
                    console.log("Menunggu pembayaran", result);
                },
                onError: (result) => {
                    console.log("Pembayaran gagal", result);
                },
                onClose: () => {
                    alert("Transaksi belum selesai.");
                },
            });
        }

        setLoading(false);
    };

    if (!pendaftaran) return <p>Loading data...</p>;

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Pembayaran</h1>
            <p className="mb-2">Kursus: <strong>{pendaftaran.kursus.nama}</strong></p>
            <p className="mb-4">Harga: <strong>Rp {pendaftaran.kursus.harga.toLocaleString()}</strong></p>

            <label className="block mb-2 font-semibold">Metode Pembayaran:</label>
            <select
                value={metode}
                onChange={(e) => setMetode(e.target.value)}
                className="w-full border px-2 py-2 rounded mb-4"
            >
                <option value="Manual">Manual</option>
                <option value="Midtrans">Midtrans</option>
            </select>

            {metode === "Manual" && (
                <div className="mb-4">
                    <label className="block mb-1">Upload Bukti Bayar:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setBuktiBayar(e.target.files[0])}
                        className="block w-full"
                    />
                </div>
            )}

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                {loading ? "Memproses..." : "Bayar Sekarang"}
            </button>
        </div>
    );
};

export default PembayaranPage;
