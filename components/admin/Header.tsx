"use client";

import Image from "next/image";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

interface HeaderProps {
    collapsed?: boolean;
}

const Header = ({ collapsed }: HeaderProps) => {
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
        <header className={`bg-white border-b border-gray-200 flex items-center justify-between px-6 py-4 sticky top-0 z-40 shadow-sm ${collapsed ? "ml-20" : "ml-64"} transition-all duration-300`}>
            {/* Left Section - Title */}
            <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Admin Panel</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                    {isLoading ? (
                        <div className="flex flex-col items-end">
                            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                            <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-end">
                            <p className="text-sm font-medium text-gray-900">{session?.user?.name || 'Admin'}</p>
                            <p className="text-xs text-gray-500 capitalize">{session?.user?.role?.toLowerCase() || 'admin'}</p>
                        </div>
                    )}

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className="flex items-center focus:outline-none transition-transform hover:scale-105 group"
                            aria-label="User menu"
                        >
                            <div className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center group-hover:ring-2 group-hover:ring-indigo-500 transition-all">
                                {session?.user?.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                ) : (
                                    <FaUserCircle className="text-gray-400 text-2xl" />
                                )}
                            </div>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden transform transition-all origin-top-right animate-fade-in-scale">
                                <div className="px-5 py-4 border-b border-gray-100">
                                    {isLoading ? (
                                        <>
                                            <div className="h-4 bg-gray-200 rounded w-32 mb-1 animate-pulse"></div>
                                            <div className="h-3 bg-gray-100 rounded w-20 animate-pulse"></div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-sm font-semibold text-gray-900 truncate">{session?.user?.name}</p>
                                            <p className="text-xs text-gray-500 capitalize">{session?.user?.role?.toLowerCase()}</p>
                                        </>
                                    )}
                                </div>

                                <div className="py-2">
                                    <button
                                        onClick={() => signOut()}
                                        className="w-full flex items-center px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
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