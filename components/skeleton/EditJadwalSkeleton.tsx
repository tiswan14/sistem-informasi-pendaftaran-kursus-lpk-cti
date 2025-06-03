const EditJadwalSkeleton = () => {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 flex items-center">
                <div className="h-5 w-5 mr-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Kursus */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Kursus<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Instruktur */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Instruktur (Opsional)<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Hari */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Hari<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Jam Mulai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Jam Mulai<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Jam Selesai */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Jam Selesai<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Deskripsi */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Deskripsi (Opsional)<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-24 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Lokasi */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Lokasi (Opsional)<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Ruangan */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Ruangan (Opsional)<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-transparent mb-1">
                            Status<span className="invisible">placeholder</span>
                        </label>
                        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 mt-6">
                <div className="flex-1 h-10 bg-gray-100 rounded-md animate-pulse"></div>
                <div className="flex-1 h-10 bg-gray-100 rounded-md animate-pulse"></div>
            </div>
        </form>
    )
}

export default EditJadwalSkeleton