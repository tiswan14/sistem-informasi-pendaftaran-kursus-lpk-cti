const NavLoadingSkeleton = () => {
    return (
        <div className="flex gap-4">
            {/* Skeleton untuk 2 menu item */}
            {[...Array(2)].map((_, index) => (
                <li key={index}>
                    <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg">
                        {/* Icon placeholder */}
                        <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        {/* Text placeholder */}
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                </li>
            ))}
        </div>
    );
};

// Atau versi yang lebih mirip dengan desain Anda:
const ProfileLoadingSkeleton = () => {
    return (
        <>
            {/* Loading untuk profil teks */}
            <div className="order-1 text-right hidden md:block">
                <div className="animate-pulse flex flex-col items-end space-y-1">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
            </div>

            {/* Loading untuk avatar */}
            <div className="order-1 hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            </div>
        </>
    );
};

export { NavLoadingSkeleton, ProfileLoadingSkeleton };