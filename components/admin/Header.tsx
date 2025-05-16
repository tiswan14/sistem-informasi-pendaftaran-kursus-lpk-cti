"use client";

import Image from "next/image";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";

const Header = ({ userName = "Tiswan", userRole = "Admin" }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
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
        <header className="bg-white shadow-sm flex items-center justify-between px-10 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-800">{userName}</p>
                    <p className="text-xs text-gray-500">{userRole}</p>
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
                                <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
                                <p className="text-xs text-gray-500">{userRole}</p>
                            </div>

                            <div className="py-1">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <FaUserEdit className="mr-2 text-gray-500" />
                                    Edit Profile
                                </a>
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