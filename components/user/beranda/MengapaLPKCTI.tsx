import { FaUniversity, FaBriefcase, FaChalkboardTeacher, FaHome, FaTools, FaGlobe } from 'react-icons/fa';


const MengapaLPKCTI = () => {
    return (
        <section className='py-8 sm:py-12 px-4 sm:px-6 bg-gray-50' data-aos="fade-up" data-aos-duration="1000">
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
                    Mengapa LPK{' '}
                    <span className='text-blue-800'>CTI Ciamis</span>?
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                    {/* Item 1 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaUniversity />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Akreditasi & Sertifikasi
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            Terakreditasi untuk 4 jurusan TI oleh LA-LPK Jawa Barat, dengan sertifikat BNSP dan MTCNA/CCNA.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaBriefcase />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Penyaluran Kerja
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            Kerjasama dengan 50+ SMK dan perusahaan untuk penempatan kerja lulusan.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaChalkboardTeacher />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Instruktur Kompeten
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            Dibimbing oleh instruktur bersertifikat metodologi dan teknis.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaHome />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Fasilitas Asrama
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            Asrama nyaman untuk peserta dari luar kota.
                        </p>
                    </div>

                    {/* Item 5 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaTools />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Kurikulum OJT
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            Pembelajaran berbasis On-Job Training untuk pengalaman praktik langsung.
                        </p>
                    </div>

                    {/* Item 6 */}
                    <div
                        className='group bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-blue-100'
                        data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="800"
                    >
                        <div className='text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4'>
                            <FaGlobe />
                        </div>
                        <h3 className='font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800'>
                            Standar Internasional
                        </h3>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            TUK LPS P3 dengan kurikulum berstandar global.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MengapaLPKCTI
