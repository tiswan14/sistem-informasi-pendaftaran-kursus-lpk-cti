/*
  Warnings:

  - You are about to drop the column `kursusId` on the `Instruktur` table. All the data in the column will be lost.
  - Added the required column `keahlian` to the `Instruktur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instrukturId` to the `kursus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Instruktur" DROP CONSTRAINT "Instruktur_kursusId_fkey";

-- AlterTable
ALTER TABLE "Instruktur" DROP COLUMN "kursusId",
ADD COLUMN     "keahlian" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "kursus" ADD COLUMN     "instrukturId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "nik" DROP NOT NULL,
ALTER COLUMN "tempatLahir" DROP NOT NULL,
ALTER COLUMN "tanggalLahir" DROP NOT NULL,
ALTER COLUMN "agama" DROP NOT NULL,
ALTER COLUMN "jurusan" DROP NOT NULL,
ALTER COLUMN "tahunAkademik" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "kursus" ADD CONSTRAINT "kursus_instrukturId_fkey" FOREIGN KEY ("instrukturId") REFERENCES "Instruktur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
