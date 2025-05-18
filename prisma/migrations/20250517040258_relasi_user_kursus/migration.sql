-- AddForeignKey
ALTER TABLE "kursus" ADD CONSTRAINT "kursus_instrukturId_fkey" FOREIGN KEY ("instrukturId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
