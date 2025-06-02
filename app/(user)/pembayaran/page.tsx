import {
    ArrowLeft,
    Clock,
    CheckCircle2,
    CreditCard,
    Banknote,
    BookOpen,
    Calendar,
    AlertCircle,
    History,
    Receipt,
    CalendarClock,
    FileText
} from 'lucide-react';

const RiwayatPembayaranPage = () => {
    // Data contoh - di aplikasi nyata ini akan berasal dari props atau API
    const riwayatPembayaran = [
        {
            id: 1,
            namaKursus: "Dasar Pemrograman",
            metodePembayaran: "Transfer Bank",
            jumlah: 500000,
            tanggal: "2023-10-15 14:30",
            status: "berhasil"
        },
        {
            id: 2,
            namaKursus: "React Lanjutan",
            metodePembayaran: "Kartu Kredit",
            jumlah: 750000,
            tanggal: "2023-09-28 10:15",
            status: "berhasil"
        },
        {
            id: 3,
            namaKursus: "Data Science",
            metodePembayaran: "E-Wallet",
            jumlah: 600000,
            tanggal: "2023-09-10 16:45",
            status: "pending"
        }
    ];

    const formatMataUang = (jumlah) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(jumlah);
    };

    const formatTanggal = (tanggalString) => {
        const opsi = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(tanggalString).toLocaleDateString('id-ID', opsi);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-36 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-8">
                    <FileText className="w-5 h-5 mr-2 text-gray-900" />
                    <h1 className="text-2xl font-bold text-gray-900">Riwayat Pembayaran</h1>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">Daftar Transaksi</h2>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {riwayatPembayaran.map((pembayaran) => (
                            <div key={pembayaran.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-50 rounded-full">
                                            {pembayaran.metodePembayaran === "Kartu Kredit" ? (
                                                <CreditCard className="h-6 w-6 text-blue-600" />
                                            ) : pembayaran.metodePembayaran === "Transfer Bank" ? (
                                                <Banknote className="h-6 w-6 text-blue-600" />
                                            ) : (
                                                <CreditCard className="h-6 w-6 text-blue-600" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{pembayaran.namaKursus}</h3>
                                            <div className="flex items-center mt-2 text-sm text-gray-500">
                                                {pembayaran.status === "berhasil" ? (
                                                    <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
                                                ) : (
                                                    <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                                                )}
                                                <span className="capitalize">{pembayaran.status}</span>
                                            </div>
                                            <div className="flex items-center mt-1 text-sm text-gray-500">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>{formatTanggal(pembayaran.tanggal)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-gray-900">
                                            {formatMataUang(pembayaran.jumlah)}
                                        </div>
                                        <div className="mt-1 text-sm text-gray-500">
                                            {pembayaran.metodePembayaran}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RiwayatPembayaranPage