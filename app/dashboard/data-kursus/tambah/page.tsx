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
import { redirect } from "next/navigation"
import Select from "react-select"

interface Instruktur {
    id: string
    nama: string
}


const TambahKursus = () => {
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [instrukturId, setInstrukturId] = useState<string | null>(null);
    const [instrukturs, setInstrukturs] = useState<Instruktur[]>([])
    const [isPending, setIsPending] = useState(false)

    const instrukturOptions = instrukturs.map((i) => ({
        value: i.id,
        label: i.nama,
    }));


    useEffect(() => {
        const fetchInstrukturs = async () => {
            try {
                const res = await fetch("/api/instruktur/all")
                const data = await res.json()
                setInstrukturs(data)
            } catch (err) {
                console.error("Gagal fetch instruktur:", err)
            }
        }
        fetchInstrukturs()
    }, [])

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsPending(true)
        try {
            const response = await axios.post("/api/kursus", {
                nama,
                harga: Number(harga),
                userId: instrukturId,
            });

            if (response.status === 201) {
                toast.success("Kursus berhasil ditambahkan");
            } else {
                toast.error("Terjadi kesalahan saat menambahkan kursus");
            }
        } catch (error) {
            console.error("Error menambahkan kursus:", error);
            toast.error("Gagal menambahkan kursus");
        } finally {
            setIsPending(false);
            redirect("/dashboard/data-kursus");
        }

    }

    const handleReset = () => {
        setNama('')
        setHarga('')
        setInstrukturId('')
    }


    return (
        <div className="bg-white rounded-lg shadow-md p-5 max-w-2xl mx-auto">
            <div className="mb-5">
                <h1 className="font-bold text-xl text-gray-800">Tambah Kursus Baru</h1>
                <p className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-2 rounded-lg inline-flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Isi detail lengkap kursus yang akan ditambahkan ke sistem
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
                                onChange={(selectedOption) => {
                                    if (selectedOption) {
                                        setInstrukturId(selectedOption.value);
                                    } else {
                                        setInstrukturId(null);
                                    }
                                }}
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
                        {isPending ? "Menyimpan..." : "Simpan Kursus"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TambahKursus