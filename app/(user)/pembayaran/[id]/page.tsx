import PembayaranDetailComponent from "@/components/user/pembayaran/PembayaranDetailComponent"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pembayaran Detail - LPK CTI Ciamis",
}

const PembayaranDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    return (
        <>
            <div className="py-32 px-16">
                <PembayaranDetailComponent id={id} />
            </div>
        </>
    )
}

export default PembayaranDetailPage
