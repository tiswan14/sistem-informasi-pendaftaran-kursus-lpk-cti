"use client";

import React from "react";
import {
    User,
    CreditCard,
    UserCircle,
    MapPin,
    Calendar,
    Book,
    Phone,
    Mail,
    Instagram,
    GraduationCap,
    Landmark,
} from "lucide-react";

const PesertaDetailSkeleton = () => {
    const dataItems = [
        { label: "Nama", icon: User },
        { label: "NIK", icon: CreditCard },
        { label: "Jenis Kelamin", icon: UserCircle },
        { label: "Tempat Lahir", icon: MapPin },
        { label: "Tanggal Lahir", icon: Calendar },
        { label: "Agama", icon: Landmark },
        { label: "Jurusan", icon: Book },
        { label: "Tahun Akademik", icon: GraduationCap },
        { label: "No HP", icon: Phone },
        { label: "Email", icon: Mail },
        { label: "Media Sosial", icon: Instagram },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-1 text-blue-600">
                    <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    <div className="h-5 w-16 bg-gray-200 rounded-md"></div>
                </div>
                <div className="h-8 w-48 bg-gray-200 rounded-md"></div>
                <div className="w-10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataItems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                        <div className="p-2 bg-gray-100 rounded-full">
                            <item.icon className="w-5 h-5 text-gray-300" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                            <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                            <div className="h-5 w-full bg-gray-200 rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PesertaDetailSkeleton;