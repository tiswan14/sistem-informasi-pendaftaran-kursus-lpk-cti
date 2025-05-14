"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar/navbar";
import Footer from "../footer/footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: session } = useSession();
    const hideNavbarRoutes = ["/login", "/register"];

    const isAdmin = session?.user?.role === "admin";
    const isHidden = hideNavbarRoutes.includes(pathname) || isAdmin;

    return (
        <>
            {!isHidden && <Navbar />}
            {children}
            {!isHidden && <Footer />}
        </>
    );
}
