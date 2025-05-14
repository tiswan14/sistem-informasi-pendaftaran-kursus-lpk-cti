import { getPesertaDetailById } from "@/lib/data";

const PesertaDetail = async ({ pesertaId }: { pesertaId: string }) => {
    const peserta = await getPesertaDetailById(pesertaId);

    if (!peserta) {
        return (
            <div className="text-center text-red-500 font-semibold mt-10">
                Peserta tidak ditemukan
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Detail Peserta
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <DetailItem label="Nama" value={peserta.nama} />
                <DetailItem label="NIK" value={peserta.nik} />
                <DetailItem label="Jenis Kelamin" value={peserta.jenisKelamin} />
                <DetailItem label="Tempat Lahir" value={peserta.tempatLahir} />
                <DetailItem label="Tanggal Lahir" value={peserta.tanggalLahir} />
                <DetailItem label="Agama" value={peserta.agama} />
                <DetailItem label="Jurusan" value={peserta.jurusan} />
                <DetailItem label="Tahun Akademik" value={peserta.tahunAkademik} />
                <DetailItem label="No HP" value={peserta.noHp} />
                <DetailItem label="Email" value={peserta.email} />
                <DetailItem label="Media Sosial" value={peserta.mediaSosial || "-"} />
                <DetailItem label="Role" value={peserta.role} />
            </div>
        </div>
    );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="font-medium">{value}</span>
    </div>
);

export default PesertaDetail;
