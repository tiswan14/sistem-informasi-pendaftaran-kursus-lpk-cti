/*
  Warnings:

  - You are about to drop the column `bank` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `redirectUrl` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `snapToken` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "bank",
DROP COLUMN "method",
DROP COLUMN "redirectUrl",
DROP COLUMN "snapToken",
ADD COLUMN     "metodePembayaran" TEXT,
ADD COLUMN     "namaBank" TEXT;
