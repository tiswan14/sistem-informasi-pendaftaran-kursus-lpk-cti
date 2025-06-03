/*
  Warnings:

  - You are about to drop the column `kursusId` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `sertifikat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sertifikat" DROP CONSTRAINT "sertifikat_kursusId_fkey";

-- DropForeignKey
ALTER TABLE "sertifikat" DROP CONSTRAINT "sertifikat_userId_fkey";

-- AlterTable
ALTER TABLE "sertifikat" DROP COLUMN "kursusId",
DROP COLUMN "userId";
