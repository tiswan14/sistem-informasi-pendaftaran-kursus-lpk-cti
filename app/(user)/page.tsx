import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import { FaArrowRight, FaAward, FaBook, FaBriefcase, FaBuilding, FaCertificate, FaChalkboardTeacher, FaChartLine, FaCheckCircle, FaCode, FaDesktop, FaEye, FaFlag, FaGlobe, FaGraduationCap, FaHandshake, FaHandsHelping, FaHome, FaLaptopCode, FaMedal, FaProjectDiagram, FaShieldAlt, FaStar, FaTools, FaUniversity, FaUserTie } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-36 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400 rounded-full mix-blend-screen"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-6 border border-blue-300 border-opacity-30">
                            <FaAward className="mr-2 text-yellow-300" />
                            <span className="font-medium">Terakreditasi LA-LPK & KA-LPK</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="block">Jadi Ahli IT Profesional</span>
                            <span className="text-yellow-300">Bersertifikat Nasional+Internasional</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
                            Dapatkan <span className="font-semibold">sertifikasi BNSP & MTCNA/CCNA</span>,
                            pengalaman <span className="font-semibold">On Job Training</span>, dan
                            <span className="font-semibold"> jaminan penyaluran kerja</span> dari LPK CTI Ciamis
                        </p>

                        {/* CTA & Features */}
                        <div className="flex flex-col items-center space-y-8">
                            <Link
                                href="/daftar-kursus"
                                className="relative bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-12 rounded-full text-lg md:text-xl transition-all duration-300 hover:shadow-xl active:scale-95 group overflow-hidden"
                            >
                                {/* Animated background effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                                <span className="relative z-10 flex items-center justify-center">
                                    DAFTAR SEKARANG
                                    <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>

                                {/* Pulse animation */}
                                <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-yellow-300 animate-ping opacity-0 group-hover:opacity-50"></span>
                            </Link>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
                                {[
                                    { icon: <FaCertificate className="text-yellow-300" />, text: "Sertifikat BNSP" },
                                    { icon: <FaUserTie className="text-blue-200" />, text: "Instruktur Kompeten" },
                                    { icon: <FaBuilding className="text-green-300" />, text: "Penyaluran Kerja" },
                                    { icon: <FaHome className="text-red-200" />, text: "Fasilitas Asrama" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-center space-x-2 bg-blue-700 bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Mengapa LPK <span className="text-blue-800">CTI Ciamis</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Item 1 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaUniversity />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Akreditasi & Sertifikasi
                            </h3>
                            <p className="text-gray-600">
                                Terakreditasi untuk 4 jurusan TI oleh LA-LPK Jawa Barat, dengan sertifikat BNSP dan MTCNA/CCNA.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaBriefcase />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Penyaluran Kerja
                            </h3>
                            <p className="text-gray-600">
                                Kerjasama dengan 50+ SMK dan perusahaan untuk penempatan kerja lulusan.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaChalkboardTeacher />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Instruktur Kompeten
                            </h3>
                            <p className="text-gray-600">
                                Dibimbing oleh instruktur bersertifikat metodologi dan teknis.
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaHome />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Fasilitas Asrama
                            </h3>
                            <p className="text-gray-600">
                                Asrama nyaman untuk peserta dari luar kota.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaTools />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Kurikulum OJT
                            </h3>
                            <p className="text-gray-600">
                                Pembelajaran berbasis On-Job Training untuk pengalaman praktik langsung.
                            </p>
                        </div>

                        {/* Item 6 */}
                        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaGlobe />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">
                                Standar Internasional
                            </h3>
                            <p className="text-gray-600">
                                TUK LPS P3 dengan kurikulum berstandar global.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto">
                    {/* Header with decorative elements */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
                        <h2 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
                            <span className="relative z-10">
                                <FaStar className="inline mr-3 text-yellow-400" />
                                Visi & Misi LPK CTI
                                <FaStar className="inline ml-3 text-yellow-400" />
                            </span>
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 z-0"></div>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Komitmen kami dalam membangun generasi TI yang kompeten dan berkarakter
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Visi Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 transform hover:-translate-y-2 transition duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <FaEye className="text-blue-600 text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Ikut berperan serta mencerdaskan generasi bangsa",
                                    "Meningkatkan keahlian masyarakat di bidang Teknologi Informasi",
                                    "Menyiapkan tenaga kerja terampil di bidang TI",
                                    "Memberikan akses pendidikan TI bagi masyarakat kurang mampu",
                                    "Memperluas lapangan kerja"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Misi Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 transform hover:-translate-y-2 transition duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <FaFlag className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { icon: <FaBook className="text-blue-400" />, text: "Menyediakan materi mudah dipahami dan aplikatif" },
                                    { icon: <FaProjectDiagram className="text-purple-400" />, text: "Metode studi kasus untuk keahlian dunia kerja" },
                                    { icon: <FaUserTie className="text-indigo-400" />, text: "Tenaga pendidik berpengalaman untuk lulusan kompeten" },
                                    { icon: <FaHandsHelping className="text-yellow-500" />, text: "Program beasiswa bagi masyarakat kurang mampu" },
                                    { icon: <FaHandshake className="text-teal-400" />, text: "Kolaborasi dengan berbagai pihak menciptakan tenaga ahli" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mt-1 mr-3 flex-shrink-0">{item.icon}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </section>



            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    {/* Header with decorative element */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 relative inline-block">
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
                            <FaAward className="inline mr-3 text-yellow-500" />
                            Akreditasi LPK CTI
                            <FaAward className="inline ml-3 text-yellow-500" />
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Terakreditasi oleh LA-LPK dan KA-LPK Kementerian Ketenagakerjaan RI dengan predikat memuaskan
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Accreditation Description */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <FaCertificate className="text-blue-500 mr-3" />
                                Sertifikasi Resmi
                            </h3>
                            <p className="text-gray-700 mb-6">
                                LPK Cipta Tungga Indonesia telah memenuhi standar nasional melalui proses akreditasi ketat oleh lembaga resmi:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>LA-LPK (Lembaga Akreditasi LPK)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>KA-LPK Kementerian Ketenagakerjaan RI</span>
                                </li>
                            </ul>
                        </div>

                        {/* Jurusan List */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaGraduationCap className="text-green-500 mr-3" />
                                4 Jurusan Terakreditasi
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: "Digital Marketing", icon: <FaChartLine className="text-blue-400" /> },
                                    { name: "Pemrograman", icon: <FaCode className="text-purple-400" /> },
                                    { name: "Operator Komputer", icon: <FaDesktop className="text-red-400" /> },
                                    { name: "Komputer", icon: <FaLaptopCode className="text-orange-400" /> }
                                ].map((jurusan, index) => (
                                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-2xl mr-3">{jurusan.icon}</span>
                                        <span className="font-medium text-gray-800">{jurusan.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Badge Section */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                            <FaShieldAlt className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h4 className="font-bold">Standar Nasional</h4>
                                <p className="text-sm text-gray-600">Terakreditasi LA-LPK</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                            <FaMedal className="text-4xl text-yellow-500 mr-4" />
                            <div>
                                <h4 className="font-bold">Kualitas Terjamin</h4>
                                <p className="text-sm text-gray-600">Sertifikasi Resmi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
