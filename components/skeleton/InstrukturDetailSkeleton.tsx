const InstrukturDetailSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 w-64 bg-gray-200 rounded"></div>
                <div className="w-10"></div>
            </div>

            {/* Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-xs border border-gray-100">
                        <div className="w-9 h-9 bg-gray-200 rounded-lg mr-3"></div>
                        <div className="flex-1 min-w-0 space-y-2">
                            <div className="h-3 w-20 bg-gray-200 rounded"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstrukturDetailSkeleton;