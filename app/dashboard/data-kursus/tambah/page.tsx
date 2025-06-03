"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { Calendar, BookOpen, User2, Clock, RefreshCw, Save, ChevronDown } from "lucide-react"

interface Instruktur {
    id: string
    nama: string
}

const TambahKursus = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        nama: '',
        harga: '',
        deskripsi: '',
        lamaKursus: '',
        tanggalMulai: '',
        tanggalSelesai: '',
        kuota: '',
    })
    const [instrukturId, setInstrukturId] = useState<string>('')
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([])
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const fetchInstrukturs = async () => {
            try {
                const res = await axios.get("/api/instruktur/all")
                setInstrukturs(res.data)
            } catch (err) {
                console.error("Gagal fetch instruktur:", err)
                toast.error("Gagal memuat data instruktur")
            }
        }
        fetchInstrukturs()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsPending(true)

        // Validate required fields
        if (!formData.nama || !formData.harga) {
            toast.error("Nama dan harga kursus harus diisi")
            setIsPending(false)
            return
        }

        if (Number(formData.harga) < 0) {
            toast.error("Harga tidak boleh negatif")
            setIsPending(false)
            return
        }

        try {
            const response = await axios.post("/api/kursus", {
                nama: formData.nama,
                harga: Number(formData.harga),
                deskripsi: formData.deskripsi || undefined,
                lamaKursus: formData.lamaKursus ? Number(formData.lamaKursus) : undefined,
                tanggalMulai: formData.tanggalMulai || undefined,
                tanggalSelesai: formData.tanggalSelesai || undefined,
                kuota: formData.kuota ? Number(formData.kuota) : undefined,
                userId: instrukturId || undefined,
            })

            if (response.status === 201) {
                toast.success("Kursus berhasil ditambahkan")
                router.push("/dashboard/data-kursus")
            }
        } catch (error: unknown) {
            console.error("Error menambahkan kursus:", error)
            if (error instanceof Error) {
                if (error.message.includes('Network Error')) {
                    toast.error("Koneksi jaringan bermasalah")
                } else {
                    toast.error(error.message || "Gagal menambahkan kursus")
                }
            } else {
                toast.error("Gagal menambahkan kursus")
            }
        } finally {
            setIsPending(false)
        }
    }

    const handleReset = () => {
        setFormData({
            nama: '',
            harga: '',
            deskripsi: '',
            lamaKursus: '',
            tanggalMulai: '',
            tanggalSelesai: '',
            kuota: '',
        })
        setInstrukturId('')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Tambah Kursus Baru
                </h2>
                <p className="text-gray-500 text-sm mt-1">Isi formulir berikut untuk menambahkan kursus baru</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-5">
                    {/* Nama Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Kursus <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Nama kursus"
                                required
                            />
                        </div>
                    </div>

                    {/* Harga */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Harga <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-400">Rp</span>
                            </div>
                            <input
                                type="number"
                                name="harga"
                                value={formData.harga}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Harga kursus"
                                min="0"
                                required
                            />
                        </div>
                    </div>

                    {/* Lama Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Lama Kursus (bulan)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Clock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                name="lamaKursus"
                                value={formData.lamaKursus}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Durasi dalam bulan"
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                name="tanggalMulai"
                                value={formData.tanggalMulai}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                    {/* Deskripsi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                        <textarea
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-32"
                            placeholder="Deskripsi kursus..."
                        />
                    </div>

                    {/* Kuota */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kuota</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                name="kuota"
                                value={formData.kuota}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Jumlah kuota"
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Tanggal Selesai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                name="tanggalSelesai"
                                value={formData.tanggalSelesai}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Instruktur */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Instruktur</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                value={instrukturId}
                                onChange={(e) => setInstrukturId(e.target.value)}
                                className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                            >
                                <option value="">Pilih Instruktur</option>
                                {instrukturs.map((instruktur) => (
                                    <option key={instruktur.id} value={instruktur.id}>
                                        {instruktur.nama}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-8">
                <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 flex items-center justify-center px-5 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
                >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Reset
                </button>

                <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 flex items-center justify-center px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <Save className="h-5 w-5 mr-2" />
                    {isPending ? "Menyimpan..." : "Simpan Kursus"}
                </button>
            </div>
        </form>
    )
}

export default TambahKursus