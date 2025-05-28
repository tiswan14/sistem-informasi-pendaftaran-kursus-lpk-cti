import {
    FaStar,
    FaEye,
    FaCheckCircle,
    FaFlag,
    FaBook,
    FaProjectDiagram,
    FaUserTie,
    FaHandsHelping,
    FaHandshake
} from 'react-icons/fa';

const VisiMisi = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white" id='visi-misi'>
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
    )
}

export default VisiMisi
