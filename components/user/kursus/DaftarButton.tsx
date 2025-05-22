import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Kursus } from "@/app/generated/prisma";

function DaftarButton({ kursus }: { kursus: Kursus }) {
    const { data: session } = useSession();
    const router = useRouter();

    const handleDaftar = async () => {
        if (!session?.user?.id) {
            alert("Silahkan login terlebih dahulu");
            router.push("/login");
            return;
        }

        try {
            const response = await axios.post("/api/pendaftaran", {
                userId: session.user.id,
                kursusId: kursus.id,
            });
            console.log(response.data);
            alert("Pendaftaran berhasil");
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat mendaftar kursus");
        }
    };

    return <button onClick={handleDaftar}>Daftar Kursus</button>;
}
