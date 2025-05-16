"use client";

import {
    Award,
    Briefcase,
    ChevronDown,
    CreditCard,
    Key,
    Mail,
    Phone,
    RefreshCw,
    Save,
    User2,
    UserSquare2,
    VenusAndMars,
} from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";



const TambahInstrukturForm = () => {
    const [nama, setNama] = useState("");
    const [nik, setNik] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [noHp, setNoHp] = useState("");
    const [email, setEmail] = useState("");
    const [keahlian, setKeahlian] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [password, setPassword] = useState("");

    const [isPending, setIsPending] = useState(false);

    const router = useRouter();


    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsPending(true)
        try {
            await axios.post('/api/instruktur', {
                nama,
                nik,
                jenisKelamin,
                noHp,
                email,
                keahlian,
                jabatan,
                password
            })
            router.push("/dashboard/data-instruktur")

            setIsPending(false)

        } catch (error) {
            console.log("Error tambah instruktur", error)
        }
    }



    return (
        <form onSubmit={handleSubmit}
            className="grid md:grid-cols-12 gap-5"
        >
            <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                    <User2 className="h-5 w-5 mr-2" />
                    Tambah Instruktur
                </h2>

                <div className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Instruktur</label>
                        <div className="relative">
                            <User2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                name="nama"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>
                    </div>

                    {/* NIK */}
                    <div className="mb-4">
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
                            />
                        </div>
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                        <div className="relative">
                            <VenusAndMars className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                name="jenisKelamin"
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none"
                                value={jenisKelamin}
                                onChange={(e) => setJenisKelamin(e.target.value)}
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Nomor HP */}
                    <div className="mb-4">
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
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="email@contoh.com"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian Profesional */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Informasi Profesional
                </h2>

                <div className="space-y-4">
                    {/* Keahlian */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Keahlian</label>
                        <div className="relative">
                            <Award className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                name="keahlian"
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none" value={keahlian} onChange={(e) => setKeahlian(e.target.value)}
                            >
                                <option value="">Pilih Keahlian</option>
                                <option value="Programming">Programming</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Jabatan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                        <div className="relative">
                            <UserSquare2 className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <select
                                name="jabatan"
                                className="py-2 pl-10 pr-10 rounded-md border border-gray-300 w-full appearance-none" value={jabatan} onChange={(e) => setJabatan(e.target.value)}
                            >
                                <option value="">Pilih Jabatan</option>
                                <option value="Senior">Senior</option>
                                <option value="Junior">Junior</option>
                                <option value="Manager">Manager</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-2.5 text-gray-400 h-5 w-5 pointer-events-none" />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3 mt-6">
                        <button
                            type="button"
                            className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-6 text-lg font-semibold rounded-md shadow flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <RefreshCw className="h-5 w-5 mr-2" />
                            Reset
                        </button>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 bg-blue-600 text-white py-2.5 px-6 text-lg font-semibold rounded-md shadow flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                            <Save className="h-5 w-5 mr-2" />
                            {isPending ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TambahInstrukturForm;
