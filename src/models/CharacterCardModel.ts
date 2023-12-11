import { enum_card_colors, enum_card_rarities } from "@prisma/client";

export interface CharacterCardModel {
  id?: string;
  name: string;
  art: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
  cost: number;
  effect: string|null;
  trigger_effect: string|null;
}
