import EditKursusForm from "@/components/admin/kursus/edit-kursus";
import { getKursusById } from "@/lib/data";

interface PageProps {
    params: { id: string };
}

const EditKursusPage = async ({ params }: PageProps) => {
    const idKursus = params.id;
    if (!idKursus) {
        return <div className="p-4 text-red-500">Kursus tidak ditemukan</div>;
    }

    const kursus = await getKursusById(idKursus);
    if (!kursus) {
        return <div className="p-4 text-red-500">Kursus dengan ID {idKursus} tidak ada.</div>;
    }

    return (
        <div className="max-w-screen px-4 py-4">
            <EditKursusForm initialData={kursus} />
        </div>
    );
};

export default EditKursusPage;
