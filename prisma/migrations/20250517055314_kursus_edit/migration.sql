/*
  Warnings:

  - You are about to drop the column `instrukturId` on the `kursus` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "kursus" DROP CONSTRAINT "kursus_instrukturId_fkey";

-- AlterTable
ALTER TABLE "kursus" DROP COLUMN "instrukturId";

-- AddForeignKey
ALTER TABLE "kursus" ADD CONSTRAINT "kursus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
