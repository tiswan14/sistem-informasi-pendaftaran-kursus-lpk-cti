"use client";

import { BookOpen, Code, Cpu, Monitor, Zap } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative text-center mb-16 px-4 sm:px-6 py-32 md:py-32 lg:py-40 bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full opacity-20 blur-xl"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                ></div>
                <div
                    className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-100 rounded-full opacity-20 blur-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                ></div>
            </div>

            {/* Content container */}
            <div className="relative max-w-7xl mx-auto">
                {/* Badge */}
                <div
                    className="inline-flex items-center mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-down"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    data-aos-easing="ease-out-cubic"
                >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-blue-600" />
                    <span className="text-sm sm:text-base font-medium text-blue-700">
                        LPK CIPTA TUNGGA INDONESIA CIAMIS
                    </span>
                </div>

                {/* Title */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-snug sm:leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="900"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                >
                    <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                        Pelatihan IT Profesional
                    </span>
                    <br className="hidden sm:block" />
                    <span className="relative inline-block sm:inline mt-1 sm:mt-0">
                        dengan Sertifikasi + Pengalaman Kerja Langsung
                        <span
                            className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-blue-500 rounded-full"
                            data-aos="scale-x"
                            data-aos-delay="1200"
                            data-aos-duration="600"
                            data-aos-easing="ease-in-out"
                        ></span>
                    </span>
                </h1>

                {/* Grid */}
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4 sm:px-0">
                    <div
                        className="relative bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        data-aos-duration="700"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Cpu className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
                        <h3 className="relative font-semibold text-sm sm:text-base mb-1 sm:mb-2">Jaringan Komputer</h3>
                        <p className="relative text-gray-600 text-xs sm:text-sm">
                            Pelatihan sistem jaringan dan infrastruktur IT
                        </p>
                    </div>
                    <div
                        className="relative bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                        data-aos-duration="700"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Code className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
                        <h3 className="relative font-semibold text-sm sm:text-base mb-1 sm:mb-2">Programming</h3>
                        <p className="relative text-gray-600 text-xs sm:text-sm">
                            Pengembangan aplikasi dan software
                        </p>
                    </div>
                    <div
                        className="relative bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden col-span-1 sm:col-span-2 md:col-span-1"
                        data-aos="fade-up"
                        data-aos-delay="1400"
                        data-aos-duration="700"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Monitor className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
                        <h3 className="relative font-semibold text-sm sm:text-base mb-1 sm:mb-2">Digital Marketing</h3>
                        <p className="relative text-gray-600 text-xs sm:text-sm">
                            Strategi pemasaran digital terkini
                        </p>
                    </div>
                </div>

                {/* Bottom Notice */}
                <div
                    className="max-w-2xl mx-auto bg-indigo-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                    data-aos-duration="800"
                    data-aos-easing="ease-out-cubic"
                >
                    <p className="text-gray-700 text-sm sm:text-base font-medium flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0">
                        <span className="flex items-center">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse mr-1 sm:mr-2" />
                            Program{' '}
                            <span className="font-semibold text-blue-600 mx-1">Kursus + PKL</span>
                        </span>
                        <span>dengan jaminan sertifikasi kompetensi BNSP</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
