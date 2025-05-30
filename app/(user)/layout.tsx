"use client"

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function UserLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 800, once: false, easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
            <Navbar />

            <main className="flex-1 bg-white">
                {children}
            </main>

            <Footer />

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
    );
}
