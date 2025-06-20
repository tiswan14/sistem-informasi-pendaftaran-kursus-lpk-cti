import { Metadata } from "next";
import KursusDetail from "@/components/user/kursus/KursusDetail";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Kursus Detail - LPK CTI Ciamis",
};

interface PageProps {
    params: Promise<{ kursusId: string }>;
}

export default async function KursusDetailPage(props: PageProps) {
    const { kursusId } = await props.params;

    return (
        <div className="py-32 px-2 md:px-16">
            <KursusDetail kursusId={kursusId} />
        </div>
    );
}
