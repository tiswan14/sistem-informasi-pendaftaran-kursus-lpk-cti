import Link from "next/link"
import { FaArrowRight, FaAward, FaBuilding, FaCertificate, FaHome, FaUserTie } from "react-icons/fa"

const HeroSectionV2 = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-36 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400 rounded-full mix-blend-screen"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-6 border border-blue-300 border-opacity-30">
                        <FaAward className="mr-2 text-yellow-300" />
                        <span className="font-medium">Terakreditasi LA-LPK & KA-LPK</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="block">Jadi Ahli IT Profesional</span>
                        <span className="text-yellow-300">Bersertifikat Nasional+Internasional</span>
                    </h1>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
                        Dapatkan <span className="font-semibold">sertifikasi BNSP & MTCNA/CCNA</span>,
                        pengalaman <span className="font-semibold">On Job Training</span>, dan
                        <span className="font-semibold"> jaminan penyaluran kerja</span> dari LPK CTI Ciamis
                    </p>

                    <div className="flex flex-col items-center space-y-8">
                        <Link
                            href="/daftar-kursus"
                            className="relative bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-12 rounded-full text-lg md:text-xl transition-all duration-300 hover:shadow-xl active:scale-95 group overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                            <span className="relative z-10 flex items-center justify-center">
                                DAFTAR SEKARANG
                                <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>

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

    )
}

export default HeroSectionV2
