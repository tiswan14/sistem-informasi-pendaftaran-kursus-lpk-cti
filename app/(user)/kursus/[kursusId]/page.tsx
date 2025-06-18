import KursusDetail from "@/components/user/kursus/KursusDetail";

type PageProps = {
    params: { kursusId: string };
};

export default function KursusDetailPage({ params }: PageProps) {
    return (
        <div className="py-32 px-16">
            <KursusDetail kursusId={params.kursusId} />
        </div>
    );
}
