-- CreateEnum
CREATE TYPE "enum_user_types" AS ENUM ('REGULAR', 'ADMIN');

-- CreateEnum
CREATE TYPE "enum_card_colors" AS ENUM ('RED', 'GREEN', 'BLUE', 'PURPLE', 'BLACK', 'YELLOW');

-- CreateEnum
CREATE TYPE "enum_card_rarities" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'SUPER_RARE', 'SECRET_RARE', 'LEADER');

-- CreateEnum
CREATE TYPE "enum_card_types" AS ENUM ('LEADER', 'CHARACTER', 'EVENT', 'STAGE');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "enum_user_types" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Decks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" "enum_card_colors" NOT NULL,

    CONSTRAINT "Decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deck_Cards" (
    "id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "Deck_Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "cost" INTEGER,
    "power" INTEGER,
    "counter" INTEGER,
    "effect" TEXT,
    "trigger_effect" TEXT,
    "card_type" "enum_card_types" NOT NULL,
    "rarity" "enum_card_rarities" NOT NULL,
    "colors" "enum_card_colors" NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Decks" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,

    CONSTRAINT "User_Decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Cards" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "User_Cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deck_Cards_deck_id_key" ON "Deck_Cards"("deck_id");

-- AddForeignKey
ALTER TABLE "Deck_Cards" ADD CONSTRAINT "Deck_Cards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Decks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deck_Cards" ADD CONSTRAINT "Deck_Cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Decks" ADD CONSTRAINT "User_Decks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Decks" ADD CONSTRAINT "User_Decks_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Decks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Cards" ADD CONSTRAINT "User_Cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Cards" ADD CONSTRAINT "User_Cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
