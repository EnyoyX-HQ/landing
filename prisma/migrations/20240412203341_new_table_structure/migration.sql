/*
  Warnings:

  - You are about to drop the column `clinic` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `payout` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `amount` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "clinic",
ADD COLUMN     "payout" INTEGER NOT NULL,
DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL;
