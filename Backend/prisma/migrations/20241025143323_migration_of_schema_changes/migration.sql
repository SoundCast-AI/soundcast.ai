/*
  Warnings:

  - You are about to drop the column `creator` on the `Influencer` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Influencer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Influencer" DROP COLUMN "creator",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
