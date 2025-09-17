/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_postedby_fkey" FOREIGN KEY ("postedby") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
