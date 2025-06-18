"use client"

import Image from "next/image";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Home, BookOpen, CreditCard, User, LogIn, LogOut, Eye, Award, Calendar, History, CreativeCommons } from 'lucide-react';
import { NavLoadingSkeleton, ProfileLoadingSkeleton } from "../LoadingSkeleton";


const Navlink = () => {
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();



    return (
        <>
            <div className="flex items-center">
                {/* Info Teks */}
                <div className="relative group order-1 flex gap-2">
                    {status === "loading" ? (
                        // Tampilkan loading skeleton saat session sedang dimuat
                        <ProfileLoadingSkeleton />
                    ) : session ? (
                        // Tampilan ketika ada session (user sudah login)
                        <>
                            <div className="order-1 text-right hidden md:block">
                                <h2 className="text-sm font-semibold text-gray-700">{session.user?.name}</h2>
                                <h3 className="text-xs text-gray-500 capitalize">Peserta</h3>
                            </div>

                            {/* Avatar */}
                            <div
                                className="order-1 hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 cursor-pointer hover:ring-2 hover:ring-gray-300 transition duration-200"
                                title="Profil Peserta"
                            >
                                <Image
                                    src="/profile.png"
                                    width={40}
                                    height={40}
                                    alt="Foto Profil Peserta"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dropdown */}
                            <div className="absolute top-10 right-0 w-48 bg-white shadow-xl rounded-md py-1 flex-col z-50 hidden group-hover:flex transition-all duration-200 ease-out">
                                <Link href="/peserta/profile">
                                    <div className="cursor-pointer flex items-center gap-3 px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                                        <FaUser className="w-4 h-4 text-gray-500" />
                                        <span>Profil Saya</span>
                                    </div>
                                </Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <button
                                    onClick={() => signOut()}
                                    className="cursor-pointer flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                                >
                                    <FiLogOut className="w-4 h-4" />
                                    <span>Keluar</span>
                                </button>
                            </div>
                        </>
                    ) : (
                        // Tampilan ketika tidak ada session (user belum login)
                        <Link href="/login">
                            <button className="hidden md:flex cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 text-base items-center justify-center gap-2">
                                <FiLogIn className="w-4 h-4" />
                                Login
                            </button>
                        </Link>
                    )}
                </div>



                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-medium text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    {open ? <IoClose className="size-8" /> : <IoMenu className="size-8" />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={clsx(
                        "absolute top-22 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out md:static md:w-[670px] md:block md:bg-transparent md:shadow-none",
                        { hidden: !open }
                    )}
                >

                    <ul className="md:w-[400px] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 font-medium text-sm uppercase p-4 md:p-0 text-gray-700 md:text-current">
                        <li>
                            <Link
                                href="/"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                            >
                                <Home className="w-4 h-4" />
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kursus"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                            >
                                <BookOpen className="w-4 h-4" />
                                Kursus
                            </Link>
                        </li>

                        {status === "loading" ? (
                            <NavLoadingSkeleton />
                        ) : session ? (
                            <>
                                <li>
                                    <Link
                                        href="/riwayat-pendaftaran"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <History className="w-4 h-4" />
                                        Pendaftaran
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/jadwal"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Jadwal
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/sertifikat"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <CreativeCommons className="w-4 h-4" />
                                        Sertifikat
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/pembayaran"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <CreditCard className="w-4 h-4" />
                                        Pembayaran
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href="/#visi-misi"
                                        className="w-21 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <Eye className="w-4 h-4" />
                                        Visi Misi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#akreditasi"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                                    >
                                        <Award className="w-4 h-4" />
                                        Akreditasi
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="md:hidden">
                            <Link
                                href="/profil"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-gray-200/80 md:p-0"
                            >
                                <User className="w-4 h-4" />
                                Profil
                            </Link>
                        </li>
                        <li className="md:hidden pb-5">
                            {session ? (
                                <button
                                    onClick={() => signOut()}
                                    className="flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700 text-white"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    <LogIn className="w-5 h-5" />
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>

                </div>



            </div>
        </>

    );
};

export default Navlink;
