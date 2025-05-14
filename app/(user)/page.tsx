import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl min-h-screen mx-auto py-6 p-4 bg-blue-600">
                <div className="bg-red-600"></div>
            </div>
            <Footer />
        </>
    );
}
