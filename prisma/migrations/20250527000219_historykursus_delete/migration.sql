/*
  Warnings:

  - You are about to drop the `HistoriKursus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HistoriKursus" DROP CONSTRAINT "HistoriKursus_kursusId_fkey";

-- DropForeignKey
ALTER TABLE "HistoriKursus" DROP CONSTRAINT "HistoriKursus_userId_fkey";

-- AlterTable
ALTER TABLE "Pembayaran" ADD COLUMN     "redirectUrl" TEXT,
ADD COLUMN     "snapToken" TEXT,
ADD COLUMN     "waktuBayar" TIMESTAMP(3),
ALTER COLUMN "buktiBayar" DROP NOT NULL;

-- DropTable
DROP TABLE "HistoriKursus";
