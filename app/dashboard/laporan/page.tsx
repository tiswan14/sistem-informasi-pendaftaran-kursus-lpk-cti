'use client';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { bulan: 'Jan', pendaftar: 10 },
    { bulan: 'Feb', pendaftar: 25 },
    { bulan: 'Mar', pendaftar: 18 },
    { bulan: 'Apr', pendaftar: 32 },
    { bulan: 'Mei', pendaftar: 20 },
];

export default function Laporan() {

    const exportToExcel = () => {
        const dataToExport = [
            { No: 1, Nama: 'Dina Arsy', Kursus: 'Desain Grafis', Tanggal: '2025-05-15', Status: 'Aktif' },
            { No: 2, Nama: 'Ilham Prasetya', Kursus: 'MS Office', Tanggal: '2025-05-20', Status: 'Pending' },
        ];

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Laporan');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'laporan-pendaftaran.xlsx');
    };

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-2xl font-bold">Laporan Pendaftaran</h1>

            {/* Ringkasan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow p-4 rounded-xl">
                    <p className="text-gray-600">Total Pendaftar</p>
                    <p className="text-xl font-bold text-blue-600">105</p>
                </div>
                <div className="bg-white shadow p-4 rounded-xl">
                    <p className="text-gray-600">Peserta Aktif</p>
                    <p className="text-xl font-bold text-green-600">87</p>
                </div>
                <div className="bg-white shadow p-4 rounded-xl">
                    <p className="text-gray-600">Belum Diverifikasi</p>
                    <p className="text-xl font-bold text-yellow-500">18</p>
                </div>
            </div>

            {/* Grafik Pendaftaran */}
            <div className="bg-white shadow p-4 rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Grafik Pendaftar per Bulan</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="bulan" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pendaftar" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Tabel Data */}
            <div className="bg-white shadow p-4 rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Tabel Data Pendaftaran</h2>
                <button
                    onClick={exportToExcel}
                    className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Export ke Excel
                </button>

                <table className="w-full text-sm text-left border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">No</th>
                            <th className="p-2 border">Nama</th>
                            <th className="p-2 border">Kursus</th>
                            <th className="p-2 border">Tanggal Daftar</th>
                            <th className="p-2 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">1</td>
                            <td className="p-2 border">Dina Arsy</td>
                            <td className="p-2 border">Desain Grafis</td>
                            <td className="p-2 border">2025-05-15</td>
                            <td className="p-2 border text-green-600">Aktif</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">2</td>
                            <td className="p-2 border">Ilham Prasetya</td>
                            <td className="p-2 border">MS Office</td>
                            <td className="p-2 border">2025-05-20</td>
                            <td className="p-2 border text-yellow-600">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
