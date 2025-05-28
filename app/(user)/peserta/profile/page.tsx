/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileField from '@/components/ProfileField';
import {
    User, Mail, Calendar, BookOpen,
    Phone, Globe, GraduationCap,
    Cake, Bookmark, Clock,
    AlertCircle,
    AlertTriangle,
    VenusAndMars,
    Edit2,
    ClipboardList
} from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { Profile } from '@/types/profile';

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isLoading] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get<Profile>('/api/profile');
                setProfile(response.data);
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
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 py-18">
            <main className="flex-1 max-w-4xl mx-auto w-full p-4 py-8 md:py-12">
                <div className="px-4 sm:px-0">
                    <div className="flex items-center gap-5">
                        {/* Icon with modern gradient circle */}
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-600 shadow-lg">
                            <ClipboardList className="h-5 w-5 text-white" />
                        </div>

                        {/* Text container */}
                        <div>
                            {/* Main title with subtle tracking */}
                            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                                Profil Peserta
                            </h1>

                            {/* Subtitle with animated underline effect */}
                            <p className="mt-1 text-gray-500 relative group">
                                <span className="relative inline-block">
                                    Informasi profil lengkap Anda
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-bottom-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-300 ease-out"></span>
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Decorative divider */}
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
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                        {/* Header with cover and profile picture */}
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 w-full"></div>
                            <div className="absolute -bottom-16 left-6 flex items-end gap-4">
                                <div className="relative group">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
                                        {profile.image ? (
                                            <img
                                                src={profile.image}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            // onError={(e) => {
                                            //     e.target.onerror = null;
                                            //     e.target.src = '';
                                            // }}
                                            />
                                        ) : (
                                            <User className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
                                        )}
                                    </div>
                                    <button
                                        className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                                        onClick={() => {/* Handle image upload */ }}
                                    >
                                        <Edit2 className="w-3 h-3 md:w-4 md:h-4" />
                                    </button>
                                </div>
                                <div className="mb-2 hidden sm:block translate-y-4">
                                    <h2 className="text-xl font-bold text-gray-800">{profile.nama}</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">
                                            {profile.role}
                                        </span>
                                        {/* <span className="text-gray-600 text-sm flex items-center gap-1">
                                            <Mail className="w-3 h-3 md:w-4 md:h-4" />
                                            {profile.email}
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile header info */}
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

                        {/* Edit button */}
                        <div className="flex justify-end px-6 pt-4 pb-2 sm:pt-6">
                            <Link href="/peserta/profile/edit">
                                <button
                                    className={clsx(
                                        "cursor-pointer flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm md:text-base",
                                        {
                                            "bg-blue-600 hover:bg-blue-700": !isLoading,
                                            "bg-blue-400 cursor-not-allowed": isLoading
                                        }
                                    )}
                                    onClick={() => {/* Handle edit profile */ }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Memproses...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Edit2 className="w-4 h-4" />
                                            <span>Edit Profil</span>
                                        </>
                                    )}
                                </button>
                            </Link>
                        </div>

                        {/* Profile Details */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <ProfileField
                                icon={
                                    <Mail className="w-4 h-4 text-blue-600" />
                                }
                                label="Email"
                                value={profile.email || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Bookmark className="w-5 h-5 text-blue-500" />}
                                label="NIK"
                                value={profile.nik || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<VenusAndMars className="w-5 h-5 text-pink-500" />}
                                label="Jenis Kelamin"
                                value={profile.jenisKelamin || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Cake className="w-5 h-5 text-purple-500" />}
                                label="Tempat Lahir"
                                value={profile.tempatLahir || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Calendar className="w-5 h-5 text-red-500" />}
                                label="Tanggal Lahir"
                                value={profile.tanggalLahir || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<BookOpen className="w-5 h-5 text-green-500" />}
                                label="Agama"
                                value={profile.agama || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Phone className="w-5 h-5 text-amber-500" />}
                                label="No. HP"
                                value={profile.noHp || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Globe className="w-5 h-5 text-cyan-500" />}
                                label="Media Sosial"
                                value={profile.mediaSosial || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<GraduationCap className="w-5 h-5 text-indigo-500" />}
                                label="Jurusan"
                                value={profile.jurusan || 'Belum diisi'}
                            />
                            <ProfileField
                                icon={<Calendar className="w-5 h-5 text-red-500" />}
                                label="Tahun Akademik"
                                value={profile.tahunAkademik || 'Belum diisi'}
                            />
                        </div>

                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-xs md:text-sm text-gray-500 flex items-center gap-2">
                            <Clock className="w-3 h-3 md:w-4 md:h-4" />
                            <span>
                                Akun dibuat pada: {new Date(profile.createdAt).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="p-4 bg-yellow-50 rounded-lg text-amber-600 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Data profil tidak ditemukan
                    </div>
                )}
            </main>

        </div>
    );
};


export default ProfilePage


