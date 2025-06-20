"use client";

import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Download, DownloadIcon, FileSpreadsheet, FileText, Printer, Table } from 'lucide-react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFileImage, FaFilePdf, FaImage } from 'react-icons/fa';
import { toPng, toJpeg } from 'html-to-image';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

type LaporanTableProps = {
    tanggalMulai: string;
    tanggalSelesai: string;
    status: string;
};

type Kursus = {
    id: string;
    nama: string;
    harga: number;
};

type User = {
    id: string;
    nama: string;
    email: string;
    noHp: string;
};

type Pendaftaran = {
    id: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    keterangan: string | null;
    kursus: Kursus;
    user: User;
};

const LaporanTable = ({ tanggalMulai, tanggalSelesai, status }: LaporanTableProps) => {
    const [pendaftaran, setPendaftaran] = useState<Pendaftaran[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const fetchPendaftaran = async () => {
            try {
                const res = await fetch("/api/pendaftaran");
                if (!res.ok) throw new Error("Gagal mengambil data pendaftaran");

                const data = await res.json();
                setPendaftaran(data);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Terjadi kesalahan");
            } finally {
                setLoading(false);
            }
        };

        fetchPendaftaran();
    }, []);

    if (loading) return <p>Memuat data...</p>;
    if (error) return <p>Error: {error}</p>;

    const formatTanggal = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    const filteredData = pendaftaran.filter(item => {
        const tanggalDaftar = new Date(item.createdAt);
        const startDate = new Date(tanggalMulai);
        const endDate = new Date(tanggalSelesai);

        const dateFilter = tanggalMulai && tanggalSelesai
            ? tanggalDaftar >= startDate && tanggalDaftar <= endDate
            : true;

        const statusFilter = status
            ? item.status.toLowerCase().includes(status.toLowerCase())
            : true;

        return dateFilter && statusFilter;
    });

    const statistikStatus = {
        'Terverifikasi': pendaftaran.filter(d => d.status === 'Terverifikasi').length,
        'Menunggu Verifikasi': pendaftaran.filter(d => d.status === 'Menunggu diverifikasi').length,
        'Lulus': pendaftaran.filter(d => d.status === 'Lulus Pelatihan').length,
    };

    const statistikKursus = pendaftaran.reduce((acc, curr) => {
        const kursus = curr.kursus.nama;
        acc[kursus] = (acc[kursus] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const barChartData = {
        labels: Object.keys(statistikKursus),
        datasets: [
            {
                label: 'Jumlah Pendaftar per Kursus',
                data: Object.values(statistikKursus),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: Object.entries(statistikStatus).map(
            ([status, jumlah]) => `${status} (${jumlah} orang)`
        ),
        datasets: [
            {
                data: Object.values(statistikStatus),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };




    const exportToExcel = () => {
        const worksheetData = filteredData.map((item, index) => ({
            No: index + 1,
            Nama: item.user.nama,
            Email: item.user.email,
            "No HP": item.user.noHp,
            Kursus: item.kursus.nama,
            Harga: item.kursus.harga,
            "Tanggal Daftar": formatTanggal(item.createdAt),
            Status: item.status,
            Keterangan: item.keterangan ?? "-",
        }));

        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan-Pendaftar-Kursus");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const blob = new Blob([excelBuffer], {
            type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });

        saveAs(blob, "Laporan_Pendaftar.xlsx");
    };


    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    const handlePrint = () => {
        const printWindow = window.open('', '', 'width=800,height=600');
        if (!printWindow) return;

        const tableRows = filteredData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.user.nama}</td>
            <td>${item.kursus.nama}</td>
            <td>${formatRupiah(item.kursus.harga)}</td>
            <td>${formatTanggal(item.createdAt)}</td>
            <td>${item.status}${item.keterangan ? ` (${item.keterangan})` : ''}</td>
        </tr>
    `).join('');

        printWindow.document.write(`
        <html>
            <head>
                <title>Cetak Laporan Pendaftar</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 40px;
                        color: #333;
                    }
                    h1 {
                        text-align: center;
                        font-size: 20px;
                        margin-bottom: 20px;
                        text-transform: uppercase;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        font-size: 13px;
                        text-align: left;
                    }
                    th {
                        background-color: #f0f0f0;
                        text-transform: uppercase;
                    }
                    .footer {
                        margin-top: 40px;
                        font-size: 12px;
                        text-align: right;
                    }
                </style>
            </head>
            <body>
                <h1>Data Pendaftar Kursus<br/>LPK Cipta Tungga Indonesia</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Peserta</th>
                            <th>Kursus</th>
                            <th>Harga</th>
                            <th>Tanggal Daftar</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
                <div class="footer">Dicetak pada: ${new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}</div>
            </body>
        </html>
    `);

        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };


    const exportToPDF = async () => {
        const tableElement = document.createElement("div");

        // Buat HTML tabel dari data
        const tableRows = filteredData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.user.nama}</td>
            <td>${item.kursus.nama}</td>
            <td>${formatRupiah(item.kursus.harga)}</td>
            <td>${formatTanggal(item.createdAt)}</td>
            <td>${item.status}${item.keterangan ? ` (${item.keterangan})` : ''}</td>
        </tr>
    `).join("");

        tableElement.innerHTML = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="text-align: center; text-transform: uppercase;">Data Pendaftar Kursus<br/>LPK Cipta Tungga Indonesia</h2>
            <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                <thead>
                    <tr style="background:#f0f0f0;">
                        <th style="border:1px solid #ccc; padding:6px;">No</th>
                        <th style="border:1px solid #ccc; padding:6px;">Nama Peserta</th>
                        <th style="border:1px solid #ccc; padding:6px;">Kursus</th>
                        <th style="border:1px solid #ccc; padding:6px;">Harga</th>
                        <th style="border:1px solid #ccc; padding:6px;">Tanggal Daftar</th>
                        <th style="border:1px solid #ccc; padding:6px;">Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            <div style="text-align:right; font-size:12px; margin-top:20px;">
                Dicetak pada: ${new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}
            </div>
        </div>
    `;

        document.body.appendChild(tableElement);

        // Ubah ke canvas lalu ke PDF
        const canvas = await html2canvas(tableElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
        pdf.save("Laporan_Pendaftar.pdf");

        document.body.removeChild(tableElement); // bersihkan elemen dummy
    };


    const exportToPNG = async () => {
        const element = document.getElementById('chart-container');
        if (!element) return;

        try {
            const dataUrl = await toPng(element, { cacheBust: true });
            const link = document.createElement('a');
            link.download = 'semua_chart.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Error exporting PNG:', error);
        }
    };



    return (
        <div className="overflow-x-auto" id='laporan-container'>
            <div id="chart-container" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Distribusi Pendaftar per Kursus</h3>
                    <div className="h-64">
                        <Bar
                            data={barChartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { position: 'top' },
                                },
                                scales: {
                                    y: {
                                        ticks: {
                                            callback: (value) => Number(value).toFixed(0),
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Persentase Status Pendaftar</h3>
                    <div className="h-64">
                        <Pie
                            data={pieChartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { position: 'right' },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="flex justify-end items-center mb-4">
                <div className="flex gap-3">

                    <button
                        onClick={exportToPNG}
                        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 text-sm flex items-center gap-2 transition-all duration-200 shadow hover:shadow-md active:scale-95 group"
                    >
                        <DownloadIcon className="w-4 h-4 group-hover:scale-110" />
                        <span>Unduh Grafik</span>
                    </button>

                    <button
                        onClick={handlePrint}
                        className="cursor-pointer px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 text-sm flex items-center gap-2 transition-all duration-200 shadow hover:shadow-md active:scale-95 group"
                    >
                        <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Cetak</span>
                    </button>

                    <button
                        onClick={exportToPDF}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group"
                    >
                        <FaFilePdf className="w-4 h-4 group-hover:scale-110" />
                        <span>Export PDF</span>
                    </button>

                    <button
                        onClick={exportToExcel}
                        className="cursor-pointer px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm flex items-center gap-2 transition-all duration-200 shadow hover:shadow-md active:scale-95 group"
                    >
                        <FileSpreadsheet className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Export Excel</span>
                    </button>
                </div>
            </div>

            <table className="min-w-full divide-y divide-gray-200" id='tabel-laporan' >
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Peserta</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kursus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Daftar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {(currentPage - 1) * itemsPerPage + index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{item.user.nama}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{item.kursus.nama}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatRupiah(item.kursus.harga)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatTanggal(item.createdAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${item.status === 'Terverifikasi' ? 'bg-green-100 text-green-800' :
                                        item.status === 'Lulus' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'}`}>
                                    {item.status}
                                </span>
                                {item.keterangan && (
                                    <div className="text-xs text-gray-500 mt-1">{item.keterangan}</div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



            {filteredData.length === 0 && (
                <button
                    onClick={() => {
                        window.location.reload(); // atau atur ulang state jika disediakan oleh parent
                    }}
                    className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                    Reset filter
                </button>

            )}
            {filteredData.length > 0 && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4">
                    {/* Mobile view */}
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                        >
                            Next
                        </button>
                    </div>

                    {/* Desktop view */}
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Menampilkan <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> hingga{' '}
                                <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> dari{' '}
                                <span className="font-medium">{filteredData.length}</span> data pendaftar
                            </p>

                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Page numbers */}
                                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                                    let pageNum;
                                    if (totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                    } else {
                                        pageNum = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === pageNum ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default LaporanTable;