-- CreateTable
CREATE TABLE "public"."Card" (
    "cardid" SERIAL NOT NULL,
    "cardName" TEXT NOT NULL DEFAULT 'joshi',

    CONSTRAINT "Card_pkey" PRIMARY KEY ("cardid")
);
