/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `Libro` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Libro_titulo_key` ON `Libro`(`titulo`);
