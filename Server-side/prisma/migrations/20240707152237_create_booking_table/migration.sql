/*
  Warnings:

  - You are about to alter the column `number` on the `Bookings_table` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Bookings_table" ALTER COLUMN "number" SET DATA TYPE INTEGER;
