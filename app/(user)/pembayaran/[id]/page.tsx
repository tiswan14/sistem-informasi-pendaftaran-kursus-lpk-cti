import { Metadata } from "next";
import PembayaranDetailComponent from "@/components/user/pembayaran/PembayaranDetailComponent";

export const metadata: Metadata = {
    title: "Pembayaran Detail - LPK CTI Ciamis",
};

type Props = {
    params: { id: string };
};

export default function PembayaranDetailPage({ params }: Props) {
    return (
        <div className="py-32 px-16">
            <h1>Semoga</h1>
            <PembayaranDetailComponent id={params.id} />
        </div>
    );
}
