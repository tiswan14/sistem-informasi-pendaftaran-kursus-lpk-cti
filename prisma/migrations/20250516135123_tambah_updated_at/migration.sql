/*
  Warnings:

  - Added the required column `updatedAt` to the `HistoriKursus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pembayaran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HistoriKursus" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pembayaran" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pendaftaran" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
