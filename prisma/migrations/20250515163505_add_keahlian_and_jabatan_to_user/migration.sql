/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Instruktur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_userId_fkey";

-- DropForeignKey
ALTER TABLE "Instruktur" DROP CONSTRAINT "Instruktur_userId_fkey";

-- DropForeignKey
ALTER TABLE "kursus" DROP CONSTRAINT "kursus_instrukturId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "jabatan" TEXT,
ADD COLUMN     "keahlian" TEXT;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Instruktur";
