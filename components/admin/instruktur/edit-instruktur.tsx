"use client";

import axios from "axios";
import {
    User2,
    CreditCard,
    VenusAndMars,
    ChevronDown,
    Phone,
    Mail,
    Briefcase,
    Award,
    UserSquare2,
    Key,
    RefreshCw,
    Save,
    ArrowLeft
} from "lucide-react";
import { redirect } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

interface Instruktur {
    nama: string;
    nik: string;
    jenisKelamin: string;
    noHp: string;
    email: string;
    keahlian: string;
    jabatan: string;
}

interface EditInstrukturFormProps {
    initialData: Instruktur;
}

const EditInstrukturForm = ({ initialData }: EditInstrukturFormProps) => {
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [noHp, setNoHp] = useState('');
    const [email, setEmail] = useState('');
    const [keahlian, setKeahlian] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [password, setPassword] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    // Set state awal berdasarkan initialData saat komponen mount atau initialData berubah
    useEffect(() => {
        if (initialData) {
            setNama(initialData.nama);
            setNik(initialData.nik);
            setJenisKelamin(initialData.jenisKelamin);
            setNoHp(initialData.noHp);
            setEmail(initialData.email);
            setKeahlian(initialData.keahlian);
            setJabatan(initialData.jabatan);
            setPassword('');
        }
    }, [initialData]);

    const handleReset = () => {
        if (initialData) {
            setNama(initialData.nama);
            setNik(initialData.nik);
            setJenisKelamin(initialData.jenisKelamin);
            setNoHp(initialData.noHp);
            setEmail(initialData.email);
            setKeahlian(initialData.keahlian);
            setJabatan(initialData.jabatan);
            setPassword('');
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            const payload = {
                nama,
                nik,
                jenisKelamin,
                noHp,
                email,
                keahlian,
                jabatan,
                ...(password && { password })
            };

            const response = await axios.put(`/api/instruktur/${initialData.id}`, payload);

            if (response.status === 200) {
                toast.success("Data berhasil diperbarui");
            } else {
                throw new Error(response.data.message || "Gagal memperbarui data");
            }
        } catch (error) {
            console.error("Update error:", error);
        } finally {
            setIsUpdating(false);
        }
        redirect("/dashboard/data-instruktur");

    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-12 gap-5">
                {/* Form Data Pribadi */}
                <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                        <User2 className="h-5 w-5 mr-2" />
                        Edit Instruktur
                    </h2>

                    <div className="space-y-4">
                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Instruktur</label>
                            <div className="relative">
                                <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <input
                                    type="text"
                                    name="nama"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                    placeholder="Masukkan nama lengkap"
                                    required
                                />
                            </div>
                        </div>

                        {/* NIK */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">NIK (16 digit)</label>
                            <div className="relative">
                                <CreditCard className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <input
                                    type="text"
                                    name="nik"
                                    value={nik}
                                    onChange={(e) => setNik(e.target.value)}
                                    maxLength={16}
                                    className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                    placeholder="16 digit NIK"
                                    required
                                />
                            </div>
                        </div>

                        {/* Jenis Kelamin */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                            <div className="relative">
                                <VenusAndMars className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <select
                                    name="jenisKelamin"
                                    value={jenisKelamin}
                                    onChange={(e) => setJenisKelamin(e.target.value)}
                                    className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                                    required
                                >
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            </div>
                        </div>

                        {/* No HP */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <input
                                    type="tel"
                                    name="noHp"
                                    value={noHp}
                                    onChange={(e) => setNoHp(e.target.value)}
                                    className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                    placeholder="Contoh: 081234567890"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                    placeholder="email@contoh.com"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Profesional */}
                <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" />
                        Jabatan dan Keahlian
                    </h2>

                    <div className="space-y-4">
                        {/* Keahlian */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Keahlian</label>
                            <div className="relative">
                                <Award className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <select
                                    name="keahlian"
                                    value={keahlian}
                                    onChange={(e) => setKeahlian(e.target.value)}
                                    className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                                    required
                                >
                                    <option value="Programming">Programming</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            </div>
                        </div>

                        {/* Jabatan */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                            <div className="relative">
                                <UserSquare2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <select
                                    name="jabatan"
                                    value={jabatan}
                                    onChange={(e) => setJabatan(e.target.value)}
                                    className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                                    required
                                >
                                    <option value="Senior">Senior</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Manager">Manager</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            </div>
                        </div>

                        {/* Password Baru */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password Baru (Opsional)</label>
                            <div className="relative">
                                <Key className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                    placeholder="Isi jika ingin ganti password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            <RefreshCw className="mr-2 h-5 w-5" />
                            Reset
                        </button>

                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Save className="mr-2 h-5 w-5" />
                            {isUpdating ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditInstrukturForm;
