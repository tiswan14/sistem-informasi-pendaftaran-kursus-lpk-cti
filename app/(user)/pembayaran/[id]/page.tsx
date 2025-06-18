import PembayaranDetailComponent from "@/components/user/pembayaran/PembayaranDetailComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pembayaran Detail - LPK CTI Ciamis",
};

interface PageProps {
    params: {
        id: string;
    };
}

export default function PembayaranDetailPage({ params }: PageProps) {
    return (
        <div className="py-32 px-16">
            <PembayaranDetailComponent id={params.id} />
        </div>
    );
}