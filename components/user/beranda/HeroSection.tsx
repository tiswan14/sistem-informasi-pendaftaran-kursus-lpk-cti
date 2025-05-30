"use client";

import { BookOpen, Code, Cpu, Monitor, Zap } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative text-center mb-16 px-4 py-40 bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-xl"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                ></div>
            </div>

            {/* Badge */}
            <div
                className="relative inline-flex items-center mb-6 px-4 py-2 bg-blue-100 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out-cubic"
            >
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium text-blue-700">
                    LPK CIPTA TUNGGA INDONESIA CIAMIS
                </span>
            </div>

            {/* Title */}
            <h1
                className="relative text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
            >
                <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                    Pelatihan IT Profesional
                </span>
                <br />
                <span className="relative">
                    dengan Sertifikasi + Pengalaman Kerja Langsung
                    <span
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"
                        data-aos="scale-x"
                        data-aos-delay="1200"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    ></span>
                </span>
            </h1>

            {/* Grid */}
            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
                <div
                    className="relative bg-white p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="700"
                    data-aos-easing="ease-out-cubic"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Cpu className="relative w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="relative font-semibold mb-2">Jaringan Komputer</h3>
                    <p className="relative text-gray-600 text-sm">
                        Pelatihan sistem jaringan dan infrastruktur IT
                    </p>
                </div>
                <div
                    className="relative bg-white p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                    data-aos-duration="700"
                    data-aos-easing="ease-out-cubic"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Code className="relative w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="relative font-semibold mb-2">Programming</h3>
                    <p className="relative text-gray-600 text-sm">
                        Pengembangan aplikasi dan software
                    </p>
                </div>
                <div
                    className="relative bg-white p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                    data-aos-duration="700"
                    data-aos-easing="ease-out-cubic"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Monitor className="relative w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="relative font-semibold mb-2">Digital Marketing</h3>
                    <p className="relative text-gray-600 text-sm">
                        Strategi pemasaran digital terkini
                    </p>
                </div>
            </div>


            {/* Bottom Notice */}
            <div
                className="relative max-w-2xl mx-auto bg-indigo-50 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay="1600"
                data-aos-duration="800"
                data-aos-easing="ease-out-cubic"
            >
                <p className="text-gray-700 font-medium flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
                    <span>
                        Program{" "}
                        <span className="font-semibold text-blue-600">Kursus + PKL</span>{" "}
                        dengan jaminan sertifikasi kompetensi BNSP
                    </span>
                </p>
            </div>

        </section>

    );
};

export default HeroSection;
