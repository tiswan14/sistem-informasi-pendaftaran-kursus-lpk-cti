"use client";

import Image from "next/image";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isLoading = status === "loading";

    return (
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3 sticky top-0 z-40">
            {/* Left Section - Title */}
            <div className="flex items-center">
                <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 px-">
                <div className="flex items-center gap-3">
                    {isLoading ? (
                        <div className="">
                            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                            <div className="h-4 w-20 bg-gray-100 rounded animate-pulse ml-auto" />
                        </div>
                    ) : (
                        <div className="">
                            <p className="text-sm font-medium text-gray-800">Tiswan</p>
                            <p className="text-xs text-gray-500 text-right">admin</p>
                        </div>
                    )}
                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className="flex items-center focus:outline-none hover:opacity-90 transition"
                            aria-label="User menu"
                        >
                            <div className="w-9 h-9 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                                {session?.user?.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt="Profile"
                                        width={36}
                                        height={36}
                                        className="object-cover"
                                    />
                                ) : (
                                    <FaUserCircle className="text-gray-400 text-xl" />
                                )}
                            </div>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden animate-fade-in">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    {isLoading ? (
                                        <>
                                            <div className="h-4 bg-gray-200 rounded w-32 mb-1 animate-pulse"></div>
                                            <div className="h-3 bg-gray-100 rounded w-20 animate-pulse"></div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-sm font-medium text-gray-900 truncate">{session?.user?.name}</p>
                                            <p className="text-xs text-gray-500 capitalize">{session?.user?.role?.toLowerCase()}</p>
                                        </>
                                    )}
                                </div>

                                <div className="py-1">
                                    <button
                                        onClick={() => signOut()}
                                        className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
                                    >
                                        <FaSignOutAlt className="mr-3 text-red-500" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
