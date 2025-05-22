import { Metadata } from "next"
import KursusDetail from "@/components/user/kursus/KursusDetail"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import { ToastContainer } from "react-toastify"

export const metadata: Metadata = {
    title: "Kursus Detail - LPK CTI Ciamis",
}

const KursusDetailPage = ({ params: { kursusId } }: { params: { kursusId: string } }) => {
    return (
        <>
            <Navbar />
            <ToastContainer position="top-right" />
            <div className="py-32 px-16">
                <KursusDetail kursusId={kursusId} />
            </div>
            <Footer />
        </>
    )
}

export default KursusDetailPage
