import { getPendaftaranWithRelations } from "@/lib/data";

export type pendaftaranProps = Awaited<
    ReturnType<typeof getPendaftaranWithRelations>
>[number];

