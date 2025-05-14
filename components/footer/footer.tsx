import Image from "next/image"
import Link from "next/link"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className="bg-gray-900">
            <div className="max-w-screen-xl text-center md:text-left mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo & Alamat */}
                    <div className="flex flex-col">
                        <Link href="/" className="mb-6 block mx-auto md:mx-0">
                            <Image src="/logo-lpk-cti.png" width={128} height={49} alt="logo" />
                        </Link>
                        <p className="text-sm text-gray-300 mb-6">
                            LPK CTI menyediakan kursus terkemuka di bidang teknologi yang mempersiapkan siswa untuk berkompetisi di dunia digital yang terus berkembang.
                        </p>
                        <div className="mb-6 mx-auto md:mx-0">
                            <h2 className="text-gray-200 font-semibold mb-2">Alamat</h2>
                            <div className="flex items-start gap-2 text-sm text-gray-200">
                                <FaMapMarkerAlt className="mt-1 text-white" />
                                <span>Jl. Sukamulya, Ciamis, Kec. Ciamis, <br />Kabupaten Ciamis, Jawa Barat 46211</span>
                            </div>
                        </div>



                    </div>

                    {/* Jam Operasional */}
                    <div className="flex flex-col">
                        <h4 className="mb-8 text-xl font-semibold text-white">Jam Operasional</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>Senin : 08.00 – 16.00 WIB</li>
                            <li>Selasa : 08.00 – 16.00 WIB</li>
                            <li>Rabu : 08.00 – 16.00 WIB</li>
                            <li>Kamis : 08.00 – 16.00 WIB</li>
                            <li>Jumat : 08.00 – 16.00 WIB</li>
                            <li>Sabtu : 08.00 – 16.00 WIB</li>
                            <li>Minggu : <span className="text-red-500 font-semibold">Tutup</span></li>
                        </ul>
                    </div>

                    {/* Navigasi */}
                    <div className="flex flex-col">
                        <h4 className="mb-8 text-xl font-semibold text-white">Navigasi</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/">Beranda</Link></li>
                            <li><Link href="/about">Tentang LPK</Link></li>
                            <li><Link href="/program">Program Kursus</Link></li>
                            <li><Link href="/pendaftaran">Pendaftaran</Link></li>
                            <li><Link href="/kontak">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Info Pendaftaran */}
                    <div className="flex flex-col">
                        <h4 className="mb-8 text-xl font-semibold text-white">Mari Terhubung</h4>

                        <div className="mb-6">
                            <h2 className="text-gray-200 font-semibold mb-2">Nomor Telepon</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-200 justify-center md:justify-start">
                                <FaPhoneAlt className="text-white" />
                                <span>0812-3456-7890</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-gray-200 font-semibold mb-2">Email</h2>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-200">
                                <FaEnvelope className="text-white" />
                                <span>admin@lpkcti.com</span>
                            </div>
                        </div>

                        {/* Link ke media sosial */}
                        <h2 className="text-gray-200 font-semibold mt-5">Sosial Media</h2>
                        <div className="grid grid-cols-2 gap-5 mb-6 mt-4 mx-auto md:mx-0">
                            <Link
                                href="https://facebook.com/lpkcti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-blue-500"
                            >
                                <FaFacebookF className="text-white" />
                                Facebook
                            </Link>
                            <Link
                                href="https://instagram.com/lpkcti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-pink-500"
                            >
                                <FaInstagram className="text-white" />
                                Instagram
                            </Link>
                            <Link
                                href="https://twitter.com/lpkcti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-blue-400"
                            >
                                <FaTwitter className="text-white" />
                                Twitter
                            </Link>
                            <Link
                                href="https://linkedin.com/company/lpkcti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-blue-700"
                            >
                                <FaLinkedinIn className="text-white" />
                                LinkedIn
                            </Link>
                        </div>


                    </div>


                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-700 py-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} | LPK CTI Ciamis | All Rights Reserved
            </div>
        </footer>


    )
}

export default Footer
