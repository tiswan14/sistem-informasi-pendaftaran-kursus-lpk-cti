"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import {
    User, Mail, Calendar, BookOpen,
    Phone, Globe, GraduationCap,
    Cake, Bookmark,
    AlertCircle,
    AlertTriangle,
    VenusAndMars,
    ClipboardList,
    Loader2,
    Save,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Profile } from "@/types/profile";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";



const EditProfilePage = () => {

    const { register, handleSubmit, formState: { errors, isDirty, dirtyFields }, reset } = useForm<Profile>();

    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get<Profile>('/api/profile');
                setProfile(response.data);
                reset(response.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.error || 'Gagal memuat data profil');
                } else {
                    setError('Terjadi kesalahan tak terduga');
                }
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [reset]);




    const onSubmit = async (data: Profile) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
            const payload: Partial<Profile> = {};

            Object.keys(dirtyFields).forEach((key) => {
                payload[key as keyof Profile] = data[key as keyof Profile];
            });

            const response = await axios.patch('/api/profile/edit', payload);
            setProfile(response.data);
            setSubmitSuccess(true);
            reset(response.data, { keepValues: true });
            toast.success('Profil berhasil diperbarui');
            setTimeout(() => {
                redirect('/peserta/profile');
            }, 500);


        } catch (err) {
            if (axios.isAxiosError(err)) {
                setSubmitError(err.response?.data?.error || 'Gagal menyimpan perubahan');
            } else {
                setSubmitError('Terjadi kesalahan saat menyimpan');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Basic validation function
    const validateField = (value: string, fieldName: string) => {
        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || 'Email tidak valid';
        }
        if (fieldName === 'nama' && !value) {
            return 'Nama wajib diisi';
        }
        return true;
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 py-24">
            <Navbar />
            <main className="flex-1 max-w-4xl mx-auto w-full p-4 py-8 md:py-12">
                <div className="px-4 sm:px-0">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-600 shadow-lg">
                            <ClipboardList className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                                Edit Profil Peserta
                            </h1>
                            <p className="mt-1 text-gray-500 relative group">
                                <span className="relative inline-block">
                                    Perbarui informasi profil Anda
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-bottom-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-300 ease-out"></span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
                    </div>
                ) : error ? (
                    <div className="p-4 bg-red-50 rounded-lg text-red-500 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                ) : profile ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            <div className="relative">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 w-full"></div>
                            </div>

                            <div className="pt-6 px-6 sm:hidden">
                                <h2 className="text-xl font-bold text-gray-800">{profile.nama}</h2>
                                <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm">
                                    <Mail className="w-4 h-4" />
                                    <span>{profile.email}</span>
                                </div>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                                    {profile.role}
                                </span>
                            </div>

                            {submitError && (
                                <div className="mt-4 mx-6 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    {submitError}
                                </div>
                            )}

                            {submitSuccess && (
                                <div className="mt-4 mx-6 p-3 bg-green-50 text-green-600 rounded-lg flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    Profil berhasil diperbarui!
                                </div>
                            )}

                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Mail className="w-4 h-4 text-blue-600" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            validate: (value) => validateField(value, 'email')
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <User className="w-4 h-4 text-blue-600" />
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        {...register("nama", {
                                            required: 'Nama wajib diisi',
                                            minLength: {
                                                value: 2,
                                                message: 'Nama minimal 2 karakter'
                                            }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {errors.nama && (
                                        <p className="text-red-500 text-sm">{errors.nama.message}</p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Bookmark className="w-5 h-5 text-blue-500" />
                                        NIK
                                    </label>
                                    <input
                                        type="text"
                                        {...register("nik")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Masukkan NIK"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <VenusAndMars className="w-5 h-5 text-pink-500" />
                                        Jenis Kelamin
                                    </label>
                                    <select
                                        {...register("jenisKelamin")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Cake className="w-5 h-5 text-purple-500" />
                                        Tempat Lahir
                                    </label>
                                    <input
                                        type="text"
                                        {...register("tempatLahir")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Masukkan tempat lahir"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Calendar className="w-5 h-5 text-red-500" />
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        {...register("tanggalLahir")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <BookOpen className="w-5 h-5 text-green-500" />
                                        Agama
                                    </label>
                                    <select
                                        {...register("agama", { required: "Agama wajib dipilih" })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">-- Pilih Agama --</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddha">Buddha</option>
                                        <option value="Konghucu">Konghucu</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>

                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Phone className="w-5 h-5 text-amber-500" />
                                        No. HP
                                    </label>
                                    <input
                                        type="text"
                                        {...register("noHp")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Masukkan nomor HP"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Globe className="w-5 h-5 text-cyan-500" />
                                        Media Sosial
                                    </label>
                                    <input
                                        type="text"
                                        {...register("mediaSosial")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Masukkan media sosial"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <GraduationCap className="w-5 h-5 text-indigo-500" />
                                        Jurusan
                                    </label>
                                    <select
                                        {...register("jurusan")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">-- Pilih Jurusan --</option>
                                        <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                                        <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                                        <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                                        <option value="Multimedia">Multimedia</option>
                                        <option value="Teknik Elektronika Industri">Teknik Elektronika Industri</option>
                                        <option value="Akuntansi dan Keuangan">Akuntansi</option>
                                        <option value="Manajemen Perkantoran">Manajemen Perkantoran</option>
                                        <option value="Pemasaran Digital">Pemasaran Digital</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>


                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Calendar className="w-5 h-5 text-red-500" />
                                        Tahun Akademik
                                    </label>
                                    <input
                                        type="text"
                                        {...register("tahunAkademik")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Masukkan tahun akademik"
                                    />
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                <Link href="/peserta/profile">
                                    <button
                                        type="button"
                                        className="cursor-pointer flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        <span>Kembali</span>
                                    </button>
                                </Link>

                                <button
                                    type="submit"
                                    className="cursor-pointer flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting || !isDirty}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Menyimpan...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Save className="w-4 h-4" />
                                            <span>Simpan Perubahan</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="p-4 bg-yellow-50 rounded-lg text-amber-600 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Data profil tidakk ditemukan
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default EditProfilePage;