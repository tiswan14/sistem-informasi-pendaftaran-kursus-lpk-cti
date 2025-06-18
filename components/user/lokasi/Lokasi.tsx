"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Lokasi = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 5500, // semakin besar, animasi dipicu lebih awal
        });

    }, []);

    return (
        <section id="lokasi" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        Lokasi Kami
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Jl. Sukamulya, Ciamis, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46211
                    </p>
                </div>

                <div
                    className="rounded-xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="aspect-w-16 aspect-h-9 w-full h-0 pb-[35%] relative">
                        <iframe
                            title="Lokasi LPKCTI"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789!2d106.816666!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f123456789ab%3A0xabcdef1234567890!2sLPKCTI!5e0!3m2!1sid!2sid!4v1234567890123"
                            className="absolute top-0 left-0 w-full h-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>

                <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
                    <a
                        href="https://maps.google.com?q=Jl.+Contoh+Alamat+No.+123,+Kota+Contoh,+Provinsi+Contoh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Buka di Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Lokasi;