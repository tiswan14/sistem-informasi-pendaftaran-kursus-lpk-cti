-- AlterTable
ALTER TABLE "jadwal" ADD COLUMN     "instrukturId" TEXT,
ADD COLUMN     "lokasi" TEXT,
ADD COLUMN     "ruangan" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'aktif';

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_instrukturId_fkey" FOREIGN KEY ("instrukturId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
