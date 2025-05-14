import { Metadata } from "next";
import { Suspense } from "react";
import PesertaDetail from "@/components/admin/peserta/peserta-detail";

export const metadata: Metadata = {
    title: "Detail Peserta | LPK CTI Ciamis",
};

const PesertaDetailPage = ({
    params
}: {
    params: { pesertaId: string }
}) => {
    const pesertaId = params.pesertaId;
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PesertaDetail pesertaId={pesertaId} />
            </Suspense>
        </div>
    );
};

export default PesertaDetailPage;
