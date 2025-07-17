"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { Calendar, BookOpen, User2, Clock, RefreshCw, Save, ChevronDown, Image as ImageIcon } from "lucide-react"

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
        status: 'aktif',
    })
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
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
        e.preventDefault();
        setIsPending(true);

        if (!formData.nama || !formData.harga) {
            toast.error("Nama dan harga kursus harus diisi");
            setIsPending(false);
            return;
        }

        if (Number(formData.harga) < 0) {
            toast.error("Harga tidak boleh negatif");
            setIsPending(false);
            return;
        }

        try {
            const fd = new FormData();
            fd.append("nama", formData.nama);
            fd.append("harga", formData.harga);
            fd.append("deskripsi", formData.deskripsi || "");
            fd.append("lamaKursus", formData.lamaKursus || "");
            fd.append("tanggalMulai", formData.tanggalMulai || "");
            fd.append("tanggalSelesai", formData.tanggalSelesai || "");
            fd.append("status", formData.status || "");
            fd.append("userId", instrukturId || "");

            if (thumbnailFile) {
                fd.append("thumbnail", thumbnailFile);
            }


            const response = await axios.post("/api/kursus", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                toast.success("Kursus berhasil ditambahkan");
                router.push("/dashboard/data-kursus");
            }
        } catch (error: unknown) {
            console.error("Error menambahkan kursus:", error);
            if (error instanceof Error) {
                if (error.message.includes('Network Error')) {
                    toast.error("Koneksi jaringan bermasalah");
                } else {
                    toast.error(error.message || "Gagal menambahkan kursus");
                }
            } else {
                toast.error("Gagal menambahkan kursus");
            }
        } finally {
            setIsPending(false);
        }
    };


    useEffect(() => {
        if (formData.tanggalMulai && formData.lamaKursus) {
            const mulai = new Date(formData.tanggalMulai);
            const totalJam = parseInt(formData.lamaKursus);

            const jamPerHari = 2; // asumsi 2 jam per hari
            const totalHari = Math.ceil(totalJam / jamPerHari);

            if (!isNaN(totalHari)) {
                const selesai = new Date(mulai);
                selesai.setDate(selesai.getDate() + totalHari);

                setFormData((prev) => ({
                    ...prev,
                    tanggalSelesai: selesai.toISOString().split("T")[0], // format yyyy-mm-dd
                }));
            }
        }
    }, [formData.tanggalMulai, formData.lamaKursus]);




    const handleReset = () => {
        setFormData({
            nama: '',
            harga: '',
            deskripsi: '',
            lamaKursus: '',
            tanggalMulai: '',
            tanggalSelesai: '',
            status: ''
        })
        setInstrukturId('')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-blue-600" />Tambah Kursus Baru
                </h2>
                <p className="text-gray-600 text-sm mt-1">Isi formulir berikut untuk menambahkan kursus baru</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Nama Kursus <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className="h-4 w-4 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Nama kursus"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Harga <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 text-sm">Rp</span>
                            </div>
                            <input
                                type="number"
                                name="harga"
                                value={formData.harga}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Harga kursus"
                                min="0"
                                required
                            />
                        </div>
                    </div>



                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Thumbnail</label>
                        <div className="relative flex items-center">
                            <div className="absolute left-3 pointer-events-none">
                                <ImageIcon className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => e.target.files?.[0] && setThumbnailFile(e.target.files[0])}
                                className="block w-full pl-10 text-sm text-gray-700 border-2 border-gray-200 rounded-lg cursor-pointer bg-gray-50 focus:ring-2 focus:ring-blue-500 py-2 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Tanggal Mulai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-500" />
                            </div>
                            <input
                                type="date"
                                name="tanggalMulai"
                                value={formData.tanggalMulai}
                                onChange={handleChange}
                                min={new Date().toISOString().split("T")[0]}
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />

                        </div>
                    </div>



                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Lama Kursus (jam)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Clock className="h-4 w-4 text-gray-500" />
                            </div>
                            <input
                                type="number"
                                name="lamaKursus"
                                value={formData.lamaKursus}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                placeholder="Durasi dalam jam"
                                min="0"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Deskripsi</label>
                        <textarea
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            className="block w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 h-32 bg-gray-50"
                            placeholder="Deskripsi kursus..."
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Tanggal Selesai</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-500" />
                            </div>
                            <input
                                type="date"
                                name="tanggalSelesai"
                                value={formData.tanggalSelesai}
                                disabled
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
                            />

                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Instruktur</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-4 w-4 text-gray-500" />
                            </div>
                            <select
                                value={instrukturId}
                                onChange={(e) => setInstrukturId(e.target.value)}
                                className="block w-full pl-10 pr-8 py-2 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 appearance-none bg-gray-50"
                            >
                                <option value="">Pilih Instruktur</option>
                                {instrukturs.map((instruktur) => (
                                    <option key={instruktur.id} value={instruktur.id}>{instruktur.nama}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4 mt-6">
                <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 flex items-center justify-center px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold"
                >
                    <RefreshCw className="h-4 w-4 mr-2" />Reset
                </button>

                <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 flex items-center justify-center px-4 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold disabled:opacity-70"
                >
                    <Save className="h-4 w-4 mr-2" />{isPending ? "Menyimpan..." : "Simpan Kursus"}
                </button>
            </div>
        </form>
    )
}

export default TambahKursus