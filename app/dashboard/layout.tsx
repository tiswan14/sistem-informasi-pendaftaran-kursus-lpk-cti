import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100 min-h-screen">
                <Header />
                <div className="p-6">{children}</div>
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
            </main>
        </div>
    );
}
