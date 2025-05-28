import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Akreditasi from "@/components/user/beranda/Akreditasi";
import HeroSection from "@/components/user/beranda/HeroSection";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HeroSectionV2 from "@/components/user/beranda/HeroSectionV2";
import MengapaLPKCTI from "@/components/user/beranda/MengapaLPKCTI";

export default function Home() {
    return (
        <>
            <Navbar />

            <HeroSection />
            {/* <HeroSectionV2 /> */}

            <MengapaLPKCTI />

            <Akreditasi />

            <Footer />
        </>
    );
}
