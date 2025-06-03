/*
  Warnings:

  - A unique constraint covering the columns `[pendaftaranId]` on the table `sertifikat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pendaftaranId` to the `sertifikat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sertifikat" DROP CONSTRAINT "sertifikat_kursusId_fkey";

-- DropForeignKey
ALTER TABLE "sertifikat" DROP CONSTRAINT "sertifikat_userId_fkey";

-- AlterTable
ALTER TABLE "sertifikat" ADD COLUMN     "pendaftaranId" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "kursusId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "sertifikat_pendaftaranId_key" ON "sertifikat"("pendaftaranId");

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_pendaftaranId_fkey" FOREIGN KEY ("pendaftaranId") REFERENCES "Pendaftaran"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_kursusId_fkey" FOREIGN KEY ("kursusId") REFERENCES "kursus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
