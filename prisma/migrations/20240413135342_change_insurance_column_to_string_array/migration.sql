/*
  Warnings:

  - You are about to drop the `Insurance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClinicToInsurance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClinicToInsurance" DROP CONSTRAINT "_ClinicToInsurance_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClinicToInsurance" DROP CONSTRAINT "_ClinicToInsurance_B_fkey";

-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "insurances" TEXT[];

-- DropTable
DROP TABLE "Insurance";

-- DropTable
DROP TABLE "_ClinicToInsurance";
