/*
  Warnings:

  - You are about to drop the column `stripeCustomer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStatus` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "stripeCustomer",
DROP COLUMN "subscriptionId",
DROP COLUMN "subscriptionStatus",
ADD COLUMN     "plan" TEXT NOT NULL DEFAULT 'free',
ALTER COLUMN "role" SET DEFAULT 'user';
