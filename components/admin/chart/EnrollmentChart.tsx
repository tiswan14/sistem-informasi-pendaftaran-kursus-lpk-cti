import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { FaChartLine } from 'react-icons/fa';

// Register ChartJS components
ChartJS.register(
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const EnrollmentChart = () => {
    // Data contoh (ganti dengan data real dari API)
    const data = {
        labels: Array.from({ length: 30 }, (_, i) => `${i + 1} Jun`), // 30 hari terakhir
        datasets: [
            {
                label: 'Pendaftar Harian',
                data: [12, 19, 8, 15, 22, 17, 25, 18, 14, 20, 28, 23, 16, 10, 7, 12, 19, 25, 31, 27, 20, 15, 18, 22, 26, 19, 24, 30, 28, 22],
                borderColor: '#4f46e5', // Warna garis (indigo-600)
                backgroundColor: 'rgba(79, 70, 229, 0.1)', // Area fill
                tension: 0.4, // Kurva smooth
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    boxWidth: 6
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#1e293b',
                titleFont: { size: 14 },
                bodyFont: { size: 12 },
                padding: 12,
                cornerRadius: 8
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            },
            y: {
                min: 0,
                grid: {
                    drawBorder: false,
                    color: '#e2e8f0' // Warna gridline
                },
                ticks: {
                    stepSize: 5
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                    <FaChartLine className="mr-2 text-indigo-500" />
                    Tren Pendaftaran Harian (30 Hari)
                </h2>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-lg">
                        Harian
                    </button>
                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">
                        Mingguan
                    </button>
                </div>
            </div>

            {/* Grafik Utama */}
            <div className="h-80">
                <Line data={data} options={options} />
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-indigo-600">Total Pendaftar</p>
                    <p className="text-2xl font-bold mt-1">542</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600">Hari Terbaik</p>
                    <p className="text-xl font-bold mt-1">31 Pendaftar</p>
                    <p className="text-xs mt-1">19 Juni 2025</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600">Rata-rata Harian</p>
                    <p className="text-2xl font-bold mt-1">18</p>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentChart;