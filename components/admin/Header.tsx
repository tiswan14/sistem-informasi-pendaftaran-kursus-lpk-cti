"use client";

import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-white shadow flex items-center justify-between px-6 py-[1.1rem]">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <div className="relative group">
                    <button className="flex items-center focus:outline-none">
                        <Image
                            src="/profile.png"
                            alt="Profil"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="ml-2 text-gray-700 font-normal">Tiswan</span>
                    </button>
                    <div className="absolute right-[-15px] mt-3 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block z-10">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Edit Profil
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Pengaturan
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
