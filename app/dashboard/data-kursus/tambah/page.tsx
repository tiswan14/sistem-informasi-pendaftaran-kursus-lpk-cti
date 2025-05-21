"use client"

import {
    BookOpen,
    DollarSign,
    Save,
    UserSquare2,
    RefreshCw,
    Info,
    CalendarCheck,
    CalendarDays,
    Calendar,
} from "lucide-react"
import { useState, useEffect, SyntheticEvent } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import Select from "react-select"

interface Instruktur {
    id: string
    nama: string
}

const TambahKursus = () => {
    const [formData, setFormData] = useState({
        nama: '',
        harga: '',
        deskripsi: '',
        lamaKursus: '',
        tanggalMulai: '',
        tanggalSelesai: '',
    })
    const [instrukturId, setInstrukturId] = useState<string | null>(null)
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([])
    const [isPending, setIsPending] = useState(false)
    const router = useRouter()

    const instrukturOptions = instrukturs.map((i) => ({
        value: i.id,
        label: i.nama,
    }))

    useEffect(() => {
        const fetchInstrukturs = async () => {
            try {
                const res = await fetch("/api/instruktur/all")
                const data = await res.json()
                setInstrukturs(data)
            } catch (err) {
                console.error("Gagal fetch instruktur:", err)
                toast.error("Gagal memuat data instruktur")
            }
        }
        fetchInstrukturs()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
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
                userId: instrukturId || undefined,
            })

            if (response.status === 201) {
                toast.success("Kursus berhasil ditambahkan")
                router.push("/dashboard/data-kursus")
            }
        } catch (error: any) {
            console.error("Error menambahkan kursus:", error)

            if (error.response?.data?.error) {
                toast.error(error.response.data.error)
            } else if (error.message.includes('Network Error')) {
                toast.error("Koneksi jaringan bermasalah")
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
        })
        setInstrukturId(null)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Tambah Kursus Baru</h1>
                <div className="mt-3 flex items-start bg-blue-50 px-4 py-3 rounded-lg">
                    <Info className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Isi detail lengkap kursus yang akan ditambahkan ke sistem</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nama Kursus */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Kursus <span className="text-red-500">*</span>
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan nama kursus"
                                required
                            />
                        </div>
                    </div>

                    {/* Deskripsi Kursus */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Deskripsi Kursus
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className="h-5 w-5 text-gray-400" />
                            </div>
                            <textarea
                                name="deskripsi"
                                value={formData.deskripsi}
                                onChange={handleChange}
                                rows={3}
                                className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan deskripsi kursus"
                            />
                        </div>
                    </div>

                    {/* Harga Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Harga (Rp) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <DollarSign className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                name="harga"
                                value={formData.harga}
                                onChange={handleChange}
                                min="0"
                                className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Contoh: 250000"
                                required
                            />
                        </div>
                    </div>

                    {/* Durasi Kursus */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Durasi Kursus (Bulan)
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="number"
                                name="lamaKursus"
                                value={formData.lamaKursus}
                                onChange={handleChange}
                                min="0"
                                className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan lama kursus"
                            />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Mulai
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CalendarDays className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                name="tanggalMulai"
                                value={formData.tanggalMulai}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Tanggal Selesai */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Selesai
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CalendarCheck className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                name="tanggalSelesai"
                                value={formData.tanggalSelesai}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Instruktur */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Instruktur
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserSquare2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="pl-10">
                                <Select
                                    options={instrukturOptions}
                                    onChange={(selectedOption) => {
                                        setInstrukturId(selectedOption?.value || null)
                                    }}
                                    placeholder="Pilih Instruktur"
                                    isClearable
                                    isSearchable
                                    classNamePrefix="react-select"
                                    className="py-1.5"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-2">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 transition-colors"
                    >
                        <Save className="mr-2 h-4 w-4" />
                        {isPending ? "Menyimpan..." : "Simpan Kursus"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TambahKursus