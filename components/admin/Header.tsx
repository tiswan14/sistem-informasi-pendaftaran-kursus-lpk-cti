"use client";

import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { data: session } = useSession()
    console.log(session)


    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm flex items-center justify-between px-10 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-800">{session?.user?.name}</p>
                    <p className="text-xs text-gray-500">{session?.user?.role}</p>
                </div>

                {/* Profile Dropdown Trigger */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="focus:outline-none hover:opacity-80 transition"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        aria-label="User menu"
                    >
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full border border-gray-200"
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 z-50 py-1">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900 truncate">{session?.user?.name}</p>
                                <p className="text-xs text-gray-500">{session?.user?.role}</p>
                            </div>

                            <div className="py-1 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        signOut();
                                    }}
                                    className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    type="button"
                                >
                                    <FaSignOutAlt className="mr-2" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;