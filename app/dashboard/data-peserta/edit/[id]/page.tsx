"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { User2, Calendar, BookOpen, Save, RefreshCw, IdCard, MapPin, Landmark, GraduationCap, CalendarClock, Phone, Mail, Globe, Lock, School, BookAIcon, MoonStar, Sparkle, Asterisk } from 'lucide-react';
import { FaUserGraduate, FaYinYang } from 'react-icons/fa';

interface Peserta {
    id: string;
    nama: string;
    nik: string;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir: string;
    agama: string;
    jurusan: string;
    tahunAkademik: string;
    noHp: string;
    email: string;
    mediaSosial: string;
    password?: string;
}

const EditPesertaPage = () => {
    const params = useParams();
    const id = params.id as string;
    const router = useRouter();

    const [peserta, setPeserta] = useState<Peserta | null>(null);
    const [loading, setLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);

    // Form states
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('Laki-laki');
    const [tempatLahir, setTempatLahir] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [agama, setAgama] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [tahunAkademik, setTahunAkademik] = useState('');
    const [noHp, setNoHp] = useState('');
    const [email, setEmail] = useState('');
    const [mediaSosial, setMediaSosial] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchPeserta = async () => {
            try {
                const res = await fetch(`/api/peserta/${id}`);
                if (!res.ok) {
                    throw new Error(`Peserta tidak ditemukan (status ${res.status})`);
                }
                const data = await res.json();
                setPeserta(data.peserta);

                // Set form fields
                const p = data.peserta;
                setNama(p.nama);
                setNik(p.nik);
                setJenisKelamin(p.jenisKelamin);
                setTempatLahir(p.tempatLahir);
                setTanggalLahir(p.tanggalLahir);
                setAgama(p.agama);
                setJurusan(p.jurusan);
                setTahunAkademik(p.tahunAkademik);
                setNoHp(p.noHp);
                setEmail(p.email);
                setMediaSosial(p.mediaSosial);
            } catch (err: any) {
                toast.error(err.message || "Terjadi kesalahan saat mengambil data peserta");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPeserta();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const payload = {
                nama,
                nik,
                jenisKelamin,
                tempatLahir,
                tanggalLahir,
                agama,
                jurusan,
                tahunAkademik,
                noHp,
                email,
                mediaSosial,
                ...(password && { password }) // Only include password if it's provided
            };

            const res = await fetch(`/api/peserta/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error("Gagal memperbarui data peserta");
            }

            toast.success("Data peserta berhasil diperbarui!");
            router.push('/dashboard/data-peserta');
        } catch (err: any) {
            toast.error(err.message || "Terjadi kesalahan saat menyimpan");
        } finally {
            setIsPending(false);
        }
    };

    const handleReset = () => {
        if (peserta) {
            setNama(peserta.nama);
            setNik(peserta.nik);
            setJenisKelamin(peserta.jenisKelamin);
            setTempatLahir(peserta.tempatLahir);
            setTanggalLahir(peserta.tanggalLahir);
            setAgama(peserta.agama);
            setJurusan(peserta.jurusan);
            setTahunAkademik(peserta.tahunAkademik);
            setNoHp(peserta.noHp);
            setEmail(peserta.email);
            setMediaSosial(peserta.mediaSosial);
            setPassword('');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    if (!peserta) {
        return <div className="text-center py-10">Peserta tidak ditemukan.</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <User2 className="h-5 w-5 mr-2" />
                Edit Data Peserta
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Nama */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Nama lengkap"
                                required
                            />
                        </div>
                    </div>

                    {/* NIK */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
                        <div className="relative">
                            <IdCard className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={nik}
                                onChange={(e) => setNik(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Nomor Induk Kependudukan"
                                required
                            />
                        </div>
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                value={jenisKelamin}
                                onChange={(e) => setJenisKelamin(e.target.value)}
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                    </div>

                    {/* Tempat Lahir */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tempat Lahir</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={tempatLahir}
                                onChange={(e) => setTempatLahir(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Tempat lahir"
                                required
                            />
                        </div>
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="date"
                                value={tanggalLahir ? tanggalLahir.split('T')[0] : ''}
                                onChange={(e) => setTanggalLahir(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Agama */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Agama</label>
                        <div className="relative">
                            <MoonStar className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                value={agama}
                                onChange={(e) => setAgama(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full bg-white"
                                required
                            >
                                <option value="" disabled>Pilih Agama</option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Konghucu">Konghucu</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Jurusan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jurusan</label>
                        <div className="relative">
                            <GraduationCap className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                value={jurusan}
                                onChange={(e) => setJurusan(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full bg-white"
                                required
                            >
                                <option value="">Pilih Jurusan</option>
                                <option value="Microsoft Office">Microsoft Office</option>
                                <option value="Desain Grafis">Desain Grafis</option>
                                <option value="Pemrograman Dasar">Pemrograman</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Editing Video">Editing Video</option>
                                <option value="Teknik Jaringan Komputer">Teknik Jaringan Komputer</option>
                                <option value="Data Analyst Dasar">Data Analyst Dasar</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                            </select>
                        </div>
                    </div>


                    {/* Tahun Akademik */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Akademik</label>
                        <div className="relative">
                            <CalendarClock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={tahunAkademik}
                                onChange={(e) => setTahunAkademik(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Tahun Akademik"
                                required
                            />
                        </div>
                    </div>

                    {/* No HP */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={noHp}
                                onChange={(e) => setNoHp(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Nomor HP"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>

                    {/* Media Sosial */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Media Sosial</label>
                        <div className="relative">
                            <Globe className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={mediaSosial}
                                onChange={(e) => setMediaSosial(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Media Sosial"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password (opsional)</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Biarkan kosong jika tidak ingin mengubah"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 mt-6">
                <button
                    type="button"
                    onClick={handleReset}
                    className="cursor-pointer flex-1 bg-gray-100 text-gray-600 py-2 px-4 text-base font-medium rounded-md shadow-sm flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                </button>

                <button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer flex-1 bg-blue-600 text-white py-2 px-4 text-base font-medium rounded-md shadow-sm flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-70"
                >
                    <Save className="h-4 w-4 mr-2" />
                    {isPending ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
            </div>
        </form>
    );
};

export default EditPesertaPage;