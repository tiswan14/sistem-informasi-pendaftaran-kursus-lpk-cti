"use client"

import {
    BookOpen,
    DollarSign,
    Save,
    UserSquare2,
    RefreshCw,
    Info,
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

interface KursusData {
    id: string
    nama: string
    harga: number
    userId: string
    user: Instruktur
}

const EditKursus = ({ params }: { params: { id: string } }) => {
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [instrukturId, setInstrukturId] = useState('')
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([])
    const [isPending, setIsPending] = useState(false)
    const router = useRouter()

    const instrukturOptions = instrukturs.map((i) => ({
        value: i.id,
        label: i.nama,
    }))

    // Set selected instruktur
    const selectedInstruktur = instrukturOptions.find(opt => opt.value === instrukturId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data kursus
                const kursusRes = await fetch(`/api/kursus/${params.id}`)
                const kursusData: KursusData = await kursusRes.json()

                setNama(kursusData.nama)
                setHarga(kursusData.harga.toString())
                setInstrukturId(kursusData.userId)

                // Fetch data instruktur
                const instrukturRes = await fetch("/api/instruktur/all")
                const instrukturData = await instrukturRes.json()
                setInstrukturs(instrukturData)
            } catch (err) {
                console.error("Gagal fetch data:", err)
                toast.error("Gagal memuat data kursus")
            }
        }

        fetchData()
    }, [params.id])

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsPending(true)
        try {
            const response = await axios.put(`/api/kursus/${params.id}`, {
                nama,
                harga: Number(harga),
                userId: instrukturId,
            })

            if (response.status === 200) {
                toast.success("Kursus berhasil diperbarui")
                router.push("/dashboard/data-kursus")
            } else {
                toast.error("Terjadi kesalahan saat memperbarui kursus")
            }
        } catch (error) {
            console.error("Error memperbarui kursus:", error)
            toast.error("Gagal memperbarui kursus")
        } finally {
            setIsPending(false)
        }
    }

    const handleReset = () => {
        // Tidak perlu reset ke nilai awal, cukup kosongkan
        // Nilai akan diisi ulang oleh useEffect
        router.refresh()
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-5 max-w-2xl mx-auto">
            <div className="mb-5">
                <h1 className="font-bold text-xl text-gray-800">Edit Kursus</h1>
                <p className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-2 rounded-lg inline-flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Perbarui detail kursus yang ada di sistem
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama Kursus */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nama Kursus
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <BookOpen className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Masukkan nama kursus"
                            required
                        />
                    </div>
                </div>

                {/* Harga Kursus */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Harga (Rp)
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="number"
                            value={harga}
                            onChange={(e) => setHarga(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Contoh: 250000"
                            required
                        />
                    </div>
                </div>

                {/* Instruktur */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Instruktur
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserSquare2 className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="pl-10">
                            <Select
                                options={instrukturOptions}
                                value={selectedInstruktur}
                                onChange={(selectedOption) => selectedOption && setInstrukturId(selectedOption.value)}
                                placeholder="Pilih Instruktur"
                                isSearchable
                                classNamePrefix="react-select"
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
                    >
                        <Save className="mr-2 h-4 w-4" />
                        {isPending ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditKursus