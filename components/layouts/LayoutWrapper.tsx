"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "../footer/footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const hideNavbarRoutes = ["/login", "/register"];

    const isHidden = hideNavbarRoutes.includes(pathname);

    return (
        <>
            {!isHidden && <Navbar />}
            {children}
            {!isHidden && <Footer />}
        </>
    );
}
