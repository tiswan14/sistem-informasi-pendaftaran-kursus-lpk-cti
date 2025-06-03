-- CreateTable
CREATE TABLE "sertifikat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kursusId" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,
    "tanggalTerbit" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sertifikat_nomor_key" ON "sertifikat"("nomor");

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_kursusId_fkey" FOREIGN KEY ("kursusId") REFERENCES "kursus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
