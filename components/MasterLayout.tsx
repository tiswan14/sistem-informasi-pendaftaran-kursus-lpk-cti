// components/MasterLayout.jsx
import Link from 'next/link';
import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const MasterLayout = ({ children, collapsed }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r min-h-screen p-4">
                <nav className="space-y-2">
                    <Link href="/dashboard/data-peserta">
                        <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                            <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                                <FaUsers size={14} />
                            </div>
                            {!collapsed && (
                                <span className="text-sm font-medium text-gray-700">Data Peserta</span>
                            )}
                        </div>
                    </Link>

                    <Link href="/dashboard/data-instruktur">
                        <div className="flex items-center gap-2 p-2 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                            <div className="p-1.5 bg-yellow-100 rounded-lg text-yellow-600">
                                <FaChalkboardTeacher size={14} />
                            </div>
                            {!collapsed && (
                                <span className="text-sm font-medium text-gray-700">Data Instruktur</span>
                            )}
                        </div>
                    </Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};

export default MasterLayout;
