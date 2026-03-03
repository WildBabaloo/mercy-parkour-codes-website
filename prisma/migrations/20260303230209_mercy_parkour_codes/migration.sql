/*
  Warnings:

  - You are about to drop the column `Is_Visible` on the `mercy_parkour_codes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "mercy_parkour_codes" DROP COLUMN "Is_Visible",
ADD COLUMN     "Is_Hidden" BOOLEAN NOT NULL DEFAULT false;
