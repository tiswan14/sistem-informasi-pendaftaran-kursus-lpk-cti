"use client"

import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navlink = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
    return (
        <>
            <div className="flex items-center">
                {/* Info Teks */}
                <div className="relative group order-1 flex gap-2">
                    <div className="order-1 text-right hidden md:block">
                        <h2 className="text-sm font-semibold text-gray-700">{session?.user?.name}</h2>
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
                    <div className="absolute top-10 right-0 w-40 bg-white shadow-lg rounded-lg flex-col z-50 hidden group-hover:flex">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200">
                            <FaUser className="w-4 h-4" />
                            Profil
                        </button>
                        <button
                            onClick={() => signOut()}

                            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 mt-1"
                        >
                            <FiLogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
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
                        "absolute top-16 left-0 w-full transition-all duration-300 ease-in-out md:static md:w-[670px] md:block",
                        { hidden: !open }
                    )}
                >
                    <ul className="text-center transition-all duration-300 ease-in-out md:text-right flex flex-col font-semibold text-sm uppercase p-5 mt-5 rounded-lg bg-gray-100 
        md:flex-row md:items-center md:space-x-6 md:p-0 md:mt-0 md:border-0 md:bg-transparent md:shadow-none md:rounded-none">

                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kursus"
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Daftar Kursus
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/riwayat-pendaftaran"
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Riwayat Pendaftaran
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/pembayaran"
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Pembayaran
                            </Link>
                        </li>
                        <li className="block md:hidden">
                            <Link
                                href="/profil"
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Profil
                            </Link>
                        </li>
                        <li className="block md:hidden">
                            <Link
                                href="/logout"
                                className="block py-2 px-4 text-red-500 hover:bg-red-100 rounded-md transition duration-300 ease-in-out md:hover:bg-transparent md:p-0"
                            >
                                Keluar
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>

    );
};

export default Navlink;
