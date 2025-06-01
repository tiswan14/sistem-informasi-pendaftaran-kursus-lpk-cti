/*
  Warnings:

  - You are about to drop the column `namaBank` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "namaBank",
ADD COLUMN     "bank" TEXT;
