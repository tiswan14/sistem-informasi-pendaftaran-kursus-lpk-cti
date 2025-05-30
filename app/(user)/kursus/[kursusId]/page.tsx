import { Metadata } from "next"
import KursusDetail from "@/components/user/kursus/KursusDetail"

export const metadata: Metadata = {
    title: "Kursus Detail - LPK CTI Ciamis",
}

const KursusDetailPage = ({ params: { kursusId } }: { params: { kursusId: string } }) => {
    return (
        <>
            <div className="py-32 px-16">
                <KursusDetail kursusId={kursusId} />
            </div>
        </>
    )
}

export default KursusDetailPage
