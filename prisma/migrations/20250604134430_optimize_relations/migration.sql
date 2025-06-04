/*
  Warnings:

  - You are about to drop the column `instrukturId` on the `jadwal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "jadwal" DROP CONSTRAINT "jadwal_instrukturId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "jadwal" DROP COLUMN "instrukturId",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "sertifikat" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
