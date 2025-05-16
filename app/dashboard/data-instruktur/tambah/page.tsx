"use client";

import { Award, Briefcase, ChevronDown, CreditCard, Key, Mail, Phone, RefreshCw, Save, User2, UserSquare2, VenusAndMars } from "lucide-react";

const TambahInstrukturForm = () => {


    return (
        <form className="grid md:grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                    <User2 className="h-5 w-5 mr-2" />
                    Tambah Instruktur
                </h2>

                <div className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Instruktur</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="nama"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">NIK (16 digit)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CreditCard className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="nik"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="16 digit NIK"
                                maxLength={16}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <VenusAndMars className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                name="jenisKelamin"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="noHp"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Contoh: 081234567890"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="email@contoh.com"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Informasi Profesional
                </h2>

                <div className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Keahlian</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Award className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                name="keahlian"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Keahlian</option>
                                <option value="Programming">Programming</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserSquare2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                name="jabatan"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full appearance-none"
                            >
                                <option value="">Pilih Jabatan</option>
                                <option value="Senior">Senior</option>
                                <option value="Junior">Junior</option>
                                <option value="Manager">Manager</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Key className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 w-full"
                                placeholder="Password"
                            />
                        </div>
                    </div>

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
                            className="flex-1 bg-blue-600 text-white py-2.5 px-6 text-lg font-semibold rounded-md shadow flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                            <Save className="h-5 w-5 mr-2" />
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TambahInstrukturForm;
