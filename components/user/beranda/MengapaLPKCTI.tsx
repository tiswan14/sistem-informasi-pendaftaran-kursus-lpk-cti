import { FaUniversity, FaBriefcase, FaChalkboardTeacher, FaHome, FaTools, FaGlobe } from 'react-icons/fa';


const MengapaLPKCTI = () => {
    return (
        <section className='py-12 px-4 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Mengapa LPK{' '}
                    <span className='text-blue-800'>CTI Ciamis</span>?
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Item 1 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaUniversity />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Akreditasi & Sertifikasi
                        </h3>
                        <p className='text-gray-600'>
                            Terakreditasi untuk 4 jurusan TI oleh LA-LPK Jawa
                            Barat, dengan sertifikat BNSP dan MTCNA/CCNA.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaBriefcase />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Penyaluran Kerja
                        </h3>
                        <p className='text-gray-600'>
                            Kerjasama dengan 50+ SMK dan perusahaan untuk
                            penempatan kerja lulusan.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaChalkboardTeacher />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Instruktur Kompeten
                        </h3>
                        <p className='text-gray-600'>
                            Dibimbing oleh instruktur bersertifikat metodologi
                            dan teknis.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaHome />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Fasilitas Asrama
                        </h3>
                        <p className='text-gray-600'>
                            Asrama nyaman untuk peserta dari luar kota.
                        </p>
                    </div>

                    {/* Item 5 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaTools />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Kurikulum OJT
                        </h3>
                        <p className='text-gray-600'>
                            Pembelajaran berbasis On-Job Training untuk
                            pengalaman praktik langsung.
                        </p>
                    </div>

                    {/* Item 6 */}
                    <div className='group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100'>
                        <div className='text-blue-600 text-4xl mb-4'>
                            <FaGlobe />
                        </div>
                        <h3 className='font-bold text-lg mb-2 text-gray-800'>
                            Standar Internasional
                        </h3>
                        <p className='text-gray-600'>
                            TUK LPS P3 dengan kurikulum berstandar global.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MengapaLPKCTI
