-- AlterTable
ALTER TABLE "kursus" ADD COLUMN     "kuota" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'aktif',
ADD COLUMN     "thumbnail" TEXT;
