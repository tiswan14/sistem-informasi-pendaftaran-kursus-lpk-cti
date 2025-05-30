/*
  Warnings:

  - You are about to drop the `Pembayaran` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pembayaran" DROP CONSTRAINT "Pembayaran_pendaftaranId_fkey";

-- DropTable
DROP TABLE "Pembayaran";

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "method" TEXT,
    "amount" INTEGER NOT NULL,
    "snapToken" TEXT,
    "redirectUrl" TEXT,
    "waktuBayar" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'unpaid',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pendaftaranId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_pendaftaranId_key" ON "Payment"("pendaftaranId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_pendaftaranId_fkey" FOREIGN KEY ("pendaftaranId") REFERENCES "Pendaftaran"("id") ON DELETE CASCADE ON UPDATE CASCADE;
