"use client";



const TambahInstrukturFormSkeleton = () => {
    return (
        <div className="grid md:grid-cols-12 gap-5 animate-pulse">
            {/* Main Form Section */}
            <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-5">
                    <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                    <div className="h-6 w-40 bg-gray-200 rounded-md"></div>
                </div>

                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="mb-4">
                            <div className="h-4 w-24 bg-gray-200 rounded-md mb-2"></div>
                            <div className="relative">
                                <div className="absolute left-3 top-2.5 h-5 w-5 bg-gray-200 rounded-full"></div>
                                <div className="h-10 w-full bg-gray-100 rounded-md pl-10"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Section */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-5">
                    <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                    <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
                </div>

                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="mb-4">
                            <div className="h-4 w-24 bg-gray-200 rounded-md mb-2"></div>
                            <div className="relative">
                                <div className="absolute left-3 top-2.5 h-5 w-5 bg-gray-200 rounded-full"></div>
                                <div className="h-10 w-full bg-gray-100 rounded-md pl-10"></div>
                                <div className="absolute right-3 top-2.5 h-5 w-5 bg-gray-200 rounded-full"></div>
                            </div>
                        </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex space-x-3 mt-4">
                        <div className="flex-1 h-10 bg-gray-200 rounded-md"></div>
                        <div className="flex-1 h-10 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TambahInstrukturFormSkeleton;