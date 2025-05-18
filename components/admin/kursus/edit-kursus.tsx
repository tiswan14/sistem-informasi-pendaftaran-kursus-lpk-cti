"use client";

import axios from "axios";
import { BookOpen, DollarSign, UserSquare2, RefreshCw, Save } from "lucide-react";
import { redirect } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

interface Kursus {
    id: string;
    nama: string;
    harga: number;
    instrukturId: string;
}

interface InstrukturOption {
    value: string;
    label: string;
}

interface EditKursusFormProps {
    initialData: Kursus;
    instrukturOptions: InstrukturOption[];
}

const EditKursusForm = ({ initialData, instrukturOptions }: EditKursusFormProps) => {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [instrukturId, setInstrukturId] = useState('');
    const [isPending, setIsPending] = useState(false);

    // Set initial state based on initialData
    useEffect(() => {
        if (initialData) {
            setNama(initialData.nama);
            setHarga(initialData.harga.toString());
            setInstrukturId(initialData.instrukturId);
        }
    }, [initialData]);

    const handleReset = () => {
        if (initialData) {
            setNama(initialData.nama);
            setHarga(initialData.harga.toString());
            setInstrukturId(initialData.instrukturId);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const payload = {
                nama,
                harga: Number(harga),
                instrukturId
            };

            const response = await axios.put(`/api/kursus/${initialData.id}`, payload);

            if (response.status === 200) {
                toast.success("Kursus berhasil diperbarui");
            } else {
                throw new Error(response.data.message || "Gagal memperbarui kursus");
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Gagal memperbarui kursus");
        } finally {
            setIsPending(false);
        }
        redirect("/dashboard/data-kursus");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Edit Kursus
                </h2>

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
                                value={instrukturOptions.find(option => option.value === instrukturId)}
                                onChange={(selectedOption) => setInstrukturId(selectedOption?.value || '')}
                                placeholder="Pilih Instruktur"
                                isSearchable
                                classNamePrefix="react-select"
                                className="react-select-container"
                                className="react-select__control"
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-4">
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
    );
};

export default EditKursusForm;