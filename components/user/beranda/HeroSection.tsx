import { BookOpen, Code, Cpu, Monitor, Zap } from "lucide-react"

const HeroSection = () => {
    return (
        <section className="text-center mb-16 px-4 py-40 bg-gradient-to-b from-blue-50 to-white rounded-xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-blue-100 rounded-full">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium text-blue-700">LPK CIPTA TUNGGA INDONESIA CIAMIS</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-blue-600">Pelatihan IT Profesional</span> <br />
                dengan Sertifikasi + Pengalaman Kerja Langsung
            </h1>

            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <Cpu className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">Jaringan Komputer</h3>
                    <p className="text-gray-600 text-sm">Pelatihan sistem jaringan dan infrastruktur IT</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <Code className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">Programming</h3>
                    <p className="text-gray-600 text-sm">Pengembangan aplikasi dan software</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <Monitor className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">Digital Marketing</h3>
                    <p className="text-gray-600 text-sm">Strategi pemasaran digital terkini</p>
                </div>
            </div>

            <div className="max-w-2xl mx-auto bg-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 font-medium flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Program <span className="font-semibold text-blue-600">Kursus + PKL</span> dengan jaminan sertifikasi kompetensi BNSP</span>
                </p>
            </div>
        </section>)
}

export default HeroSection
