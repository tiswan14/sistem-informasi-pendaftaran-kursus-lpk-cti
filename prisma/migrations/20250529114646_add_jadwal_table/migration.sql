-- CreateTable
CREATE TABLE "jadwal" (
    "id" TEXT NOT NULL,
    "kursusId" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "jamMulai" TEXT NOT NULL,
    "jamSelesai" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jadwal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jadwal" ADD CONSTRAINT "jadwal_kursusId_fkey" FOREIGN KEY ("kursusId") REFERENCES "kursus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
