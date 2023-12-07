import { enum_card_colors, enum_card_rarities, enum_card_types } from "@prisma/client";

export interface ICreateCardDTO {
  id: string;
  name: string;
  affiliation: string[];
  cost?: number;
  health?: number;
  power?: number;
  counter?: number;
  effect?: string;
  trigger_effect?: string;
  card_type: enum_card_types;
  rarity: enum_card_rarities;
  colors: enum_card_colors[];
}
