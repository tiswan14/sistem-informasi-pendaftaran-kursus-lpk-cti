/*
  Warnings:

  - You are about to drop the column `metodePembayaran` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "metodePembayaran",
ADD COLUMN     "method" TEXT;
