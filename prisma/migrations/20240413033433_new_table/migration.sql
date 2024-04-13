-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "insurance" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "payout" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'in progress',
    "file" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insurance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClinicToInsurance" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicToInsurance_AB_unique" ON "_ClinicToInsurance"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicToInsurance_B_index" ON "_ClinicToInsurance"("B");

-- AddForeignKey
ALTER TABLE "_ClinicToInsurance" ADD CONSTRAINT "_ClinicToInsurance_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicToInsurance" ADD CONSTRAINT "_ClinicToInsurance_B_fkey" FOREIGN KEY ("B") REFERENCES "Insurance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
