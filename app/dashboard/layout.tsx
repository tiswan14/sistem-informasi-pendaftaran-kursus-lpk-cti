import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | LPK CTI Ciamis",
    description: "Dashboard page for managing data and activities",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Layout */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className="ml-[260px] flex flex-col min-h-screen">
                {/* Header */}

                {/* Main Content */}
                <main className="flex-1 mt-[72px] px-4 sm:px-6 lg:px-8 py-6">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>

                {/* Toast */}
                <Toaster position="top-right" />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
}
