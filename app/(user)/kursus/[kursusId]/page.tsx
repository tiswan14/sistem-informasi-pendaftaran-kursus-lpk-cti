// app/(user)/kursus/[kursusId]/page.tsx
import { Metadata } from "next"
import KursusDetail from "@/components/user/kursus/KursusDetail"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Kursus Detail - LPK CTI Ciamis",
}

type Params = {
    params: {
        kursusId: string
    }
}

export default async function KursusDetailPage({ params }: Params) {
    return (
        <div className="py-32 px-16">
            <KursusDetail kursusId={params.kursusId} />
        </div>
    )
}
