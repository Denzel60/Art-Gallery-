/*
  Warnings:

  - You are about to drop the `Bookings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookings" DROP CONSTRAINT "Bookings_userId_fkey";

-- DropTable
DROP TABLE "Bookings";

-- CreateTable
CREATE TABLE "Bookings_table" (
    "id" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "number" BIGINT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bookings_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bookings_table" ADD CONSTRAINT "Bookings_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
