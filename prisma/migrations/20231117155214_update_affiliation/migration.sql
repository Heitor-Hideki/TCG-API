/*
  Warnings:

  - The `affiliation` column on the `Cards` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "affiliation",
ADD COLUMN     "affiliation" TEXT[];
