/*
  Warnings:

  - A unique constraint covering the columns `[art]` on the table `Cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cards_art_key" ON "Cards"("art");
