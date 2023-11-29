import { enum_card_colors, enum_card_rarities } from "@prisma/client";

export type TCard = {
  id: string;
  name: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
}

export type TLeaderCard = {
  id: string;
  name: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
  health: number;
  power: number;
  effect: string;
}

export type TCharacterCard = {
  id: string;
  name: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
  power: number;
  cost: number;
  counter: number|null;
  effect: string|null;
  trigger_effect: string|null;
}

export type TEventCard = {
  id: string;
  name: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
  cost: number;
  effect: string|null;
  trigger_effect: string|null;
}

export type TStageCard = {
  id: string;
  name: string;
  affiliation: string[];
  colors: enum_card_colors[];
  rarity: enum_card_rarities;
  cost: number;
  effect: string|null;
}
