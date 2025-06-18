import KursusDetail from "@/components/user/kursus/KursusDetail";

type Props = {
    params: {
        kursusId: string;
    };
};
export default async function KursusDetailPage({ params }: Props) {
    const { kursusId } = await params;
    return (
        <div className="py-32 px-16">
            <KursusDetail kursusId={kursusId} />
        </div>
    );
}