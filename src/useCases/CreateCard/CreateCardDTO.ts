import { enum_card_colors, enum_card_rarities, enum_card_types } from "@prisma/client";

export interface ICreateCardDTO {
  name: string;
  affiliation: string[];
  art: string;
  cost?: number;
  health?: number;
  power?: number;
  counter?: number;
  effect?: string;
  triggerEffect?: string;
  rarity: enum_card_rarities;
  colors: enum_card_colors[];
  cardType: enum_card_types;
}
