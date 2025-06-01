-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "bank" TEXT,
ADD COLUMN     "fraudStatus" TEXT,
ADD COLUMN     "orderId" TEXT,
ADD COLUMN     "paymentType" TEXT,
ADD COLUMN     "transactionId" TEXT,
ADD COLUMN     "vaNumber" TEXT,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;
