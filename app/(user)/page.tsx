import Akreditasi from "@/components/user/beranda/Akreditasi";
import HeroSection from "@/components/user/beranda/HeroSection";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HeroSectionV2 from "@/components/user/beranda/HeroSectionV2";
import MengapaLPKCTI from "@/components/user/beranda/MengapaLPKCTI";
import VisiMisi from "@/components/user/beranda/VisiMisi";


export default function Home() {
    return (
        <>

            <HeroSection />
            {/* <HeroSectionV2 /> */}

            <MengapaLPKCTI />

            <Akreditasi />

            <VisiMisi />



        </>
    );
}
