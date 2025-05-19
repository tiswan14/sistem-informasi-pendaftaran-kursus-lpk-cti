import { getKursusById, getInstruktur } from "@/lib/data";
import EditKursusForm from "./edit-kursus-form";

interface EditKursusProps {
    kursusId: string;
}

const EditKursus = async ({ kursusId }: EditKursusProps) => {
    const [kursus, instruktur] = await Promise.all([
        getKursusById(kursusId),
        getInstruktur()
    ]);

    if (!kursus) return <div>Kursus tidak ditemukan</div>;
    if (!instruktur || instruktur.length === 0) return <div>Instruktur tidak ditemukan</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Edit Kursus</h1>
            <EditKursusForm kursus={kursus} instruktur={instruktur} />
        </div>
    );
};

export default EditKursus;
