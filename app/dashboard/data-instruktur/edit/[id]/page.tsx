import EditInstrukturForm from "@/components/admin/instruktur/edit-instruktur";
import { getInstrukturById } from "@/lib/data";

interface PageProps {
    params: Promise<{ id: string }>;
}

const EditInstrukturPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const idInstruktur = id;

    if (!idInstruktur) {
        return <div className="p-4 text-red-500">Instruktur tidak ditemukan</div>;
    }

    const instruktur = await getInstrukturById(idInstruktur);
    if (!instruktur) {
        return <div className="p-4 text-red-500">Instruktur dengan ID {idInstruktur} tidak ada.</div>;
    }

    return (
        <div className="max-w-screen px-4 py-4">
            <EditInstrukturForm initialData={instruktur} />
        </div>
    );
};

export default EditInstrukturPage;
