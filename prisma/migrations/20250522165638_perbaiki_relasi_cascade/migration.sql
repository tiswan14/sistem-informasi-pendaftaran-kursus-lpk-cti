-- DropForeignKey
ALTER TABLE "HistoriKursus" DROP CONSTRAINT "HistoriKursus_kursusId_fkey";

-- DropForeignKey
ALTER TABLE "Pendaftaran" DROP CONSTRAINT "Pendaftaran_kursusId_fkey";

-- AddForeignKey
ALTER TABLE "Pendaftaran" ADD CONSTRAINT "Pendaftaran_kursusId_fkey" FOREIGN KEY ("kursusId") REFERENCES "kursus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoriKursus" ADD CONSTRAINT "HistoriKursus_kursusId_fkey" FOREIGN KEY ("kursusId") REFERENCES "kursus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
