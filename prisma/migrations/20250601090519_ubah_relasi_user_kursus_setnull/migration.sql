-- DropForeignKey
ALTER TABLE "kursus" DROP CONSTRAINT "kursus_userId_fkey";

-- AddForeignKey
ALTER TABLE "kursus" ADD CONSTRAINT "kursus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
