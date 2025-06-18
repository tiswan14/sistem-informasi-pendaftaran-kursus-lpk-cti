import { Metadata } from "next";
import PesertaDetail from "@/components/admin/peserta/peserta-detail";

export const metadata: Metadata = {
    title: "Detail Peserta - LPK CTI Ciamis",
};

interface PageProps {
    params: Promise<{ pesertaId: string }>;
}

export default async function PesertaDetailPage(props: PageProps) {
    const { pesertaId } = await props.params;

    return (
        <div className="py-32 px-16">
            <PesertaDetail pesertaId={pesertaId} />
        </div>
    );
}
