import PembayaranDetailComponent from "@/components/user/pembayaran/PembayaranDetailComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pembayaran Detail - LPK CTI Ciamis",
};

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function PembayaranDetailPage(props: PageProps) {
    const { id } = await props.params;

    return (
        <div className="py-32 px-16">
            <PembayaranDetailComponent id={id} />
        </div>
    );
}
