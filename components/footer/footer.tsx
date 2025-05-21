import Image from "next/image"
import Link from "next/link"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaChevronRight, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo-lpk-cti.png"
                                width={160}
                                height={60}
                                alt="LPK CTI Logo"
                                className="hover:opacity-90 transition-opacity"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            LPK CTI menyediakan kursus terkemuka di bidang teknologi yang mempersiapkan siswa untuk berkompetisi di dunia digital.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-blue-400 flex-shrink-0" />
                                <span>Jl. Sukamulya, Ciamis, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46211</span>
                            </div>
                        </div>
                    </div>

                    {/* Hours Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                            Jam Operasional
                        </h3>
                        <ul className="space-y-3">
                            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((day) => (
                                <li key={day} className="flex justify-between">
                                    <span>{day}</span>
                                    <span className="text-gray-400">08.00 - 16.00 WIB</span>
                                </li>
                            ))}
                            <li className="flex justify-between text-red-400">
                                <span>Minggu</span>
                                <span>Tutup</span>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                            Navigasi Cepat
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Beranda', href: '/' },
                                { name: 'Tentang Kami', href: '/about' },
                                { name: 'Program Kursus', href: '/program' },
                                { name: 'Pendaftaran', href: '/pendaftaran' },
                                { name: 'Kontak', href: '/kontak' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-blue-400 transition-colors flex items-center gap-2"
                                    >
                                        <FaChevronRight className="text-xs text-blue-400" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                            Hubungi Kami
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-900 p-2 rounded-full">
                                    <FaPhoneAlt className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Telepon</p>
                                    <p className="font-medium">0812-3456-7890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-900 p-2 rounded-full">
                                    <FaEnvelope className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-medium">admin@lpkcti.com</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-white font-medium mb-3">Media Sosial</h4>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <FaFacebookF />, color: 'hover:text-blue-500', href: 'https://facebook.com/lpkcti' },
                                        { icon: <FaInstagram />, color: 'hover:text-pink-500', href: 'https://instagram.com/lpkcti' },
                                        { icon: <FaTwitter />, color: 'hover:text-blue-400', href: 'https://twitter.com/lpkcti' },
                                        { icon: <FaLinkedinIn />, color: 'hover:text-blue-600', href: 'https://linkedin.com/company/lpkcti' },
                                        { icon: <FaYoutube />, color: 'hover:text-red-500', href: 'https://youtube.com/lpkcti' }
                                    ].map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-gray-400 text-xl ${social.color} transition-colors`}
                                            aria-label={social.href.split('/')[2]}
                                        >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} LPK Cipta Tungga Indonesia. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>


    )
}

export default Footer
