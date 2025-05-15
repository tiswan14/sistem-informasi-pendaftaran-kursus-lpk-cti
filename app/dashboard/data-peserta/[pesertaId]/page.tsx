import { Metadata } from "next";
import PesertaDetail from "@/components/admin/peserta/peserta-detail";

export const metadata: Metadata = {
    title: "Detail Peserta - LPK CTI Ciamis",
};

const PesertaDetailPage = ({
    params: { pesertaId },
}: {
    params: { pesertaId: string };
}) => {
    return (
        <div>
            <PesertaDetail pesertaId={pesertaId} />
        </div>
    );
};

export default PesertaDetailPage;