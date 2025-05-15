"use client";

import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Tutup dropdown kalau klik di luar
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow flex items-center justify-between px-6 py-[1.1rem]">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="relative" ref={dropdownRef}>
                <button
                    className="flex items-center focus:outline-none"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                    aria-label="User menu"
                >
                    <Image
                        src="/profile.png"
                        alt="Profil"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="ml-2 text-gray-700 font-normal">Tiswan</span>
                    <svg
                        className={`ml-1 w-4 h-4 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Edit Profile
                        </a>
                        <button
                            onClick={() => {
                                setDropdownOpen(false);
                                // Tambahkan fungsi logout di sini
                                signOut()
                                alert("Logout clicked!");
                            }}
                            className="w-full flex items-center justify-center gap-2 p-2 bg-red-600 text-white font-semibold rounded-b-md hover:bg-red-700 transition"
                            type="button"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
