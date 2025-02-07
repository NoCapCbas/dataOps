/*
  Warnings:

  - You are about to drop the `Resume` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeScreeningResult` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_userId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeScreeningResult" DROP CONSTRAINT "ResumeScreeningResult_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeScreeningResult" DROP CONSTRAINT "ResumeScreeningResult_userId_fkey";

-- DropTable
DROP TABLE "Resume";

-- DropTable
DROP TABLE "ResumeScreeningResult";
