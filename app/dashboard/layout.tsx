import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100 min-h-screen">
                <Header />
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}
