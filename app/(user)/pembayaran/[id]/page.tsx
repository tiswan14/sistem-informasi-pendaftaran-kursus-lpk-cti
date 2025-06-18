// app/(user)/pembayaran/[id]/page.tsx

import PembayaranDetailComponent from "@/components/user/pembayaran/PembayaranDetailComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pembayaran Detail - LPK CTI Ciamis",
};

type Props = {
    params: {
        id: string;
    };
};

export default function PembayaranDetailPage({ params }: Props) {
    return (
        <div className="py-32 px-16">
            <PembayaranDetailComponent id={params.id} />
        </div>
    );
}
