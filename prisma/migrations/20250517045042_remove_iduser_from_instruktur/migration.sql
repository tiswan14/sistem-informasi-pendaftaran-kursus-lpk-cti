-- DropForeignKey
ALTER TABLE "kursus" DROP CONSTRAINT "kursus_userId_fkey";

-- AlterTable
ALTER TABLE "kursus" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "instrukturId" DROP NOT NULL;
