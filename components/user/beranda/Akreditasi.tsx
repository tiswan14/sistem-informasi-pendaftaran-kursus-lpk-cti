import {
    FaAward,
    FaCertificate,
    FaCheckCircle,
    FaGraduationCap,
    FaChartLine,
    FaCode,
    FaDesktop,
    FaLaptopCode,
    FaShieldAlt,
    FaMedal
} from 'react-icons/fa';



const Akreditasi = () => {
    return (
        <section className="py-16 px-4 bg-gray-50" id="akreditasi">
            <div className="max-w-6xl mx-auto">
                {/* Header with decorative element */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
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
                    <div
                        className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
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
                    <div
                        className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
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
                                <div
                                    key={index}
                                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                                    data-aos="zoom-in"
                                    data-aos-delay={400 + index * 100}
                                >
                                    <span className="text-2xl mr-3">{jurusan.icon}</span>
                                    <span className="font-medium text-gray-800">{jurusan.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Badge Section */}
                <div
                    className="mt-12 flex flex-wrap justify-center gap-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
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

    )
}

export default Akreditasi
