import { Cards } from "@prisma/client";
import { CreateCardModel } from "../useCases/CreateCard/CreateCardModel";
import { LeaderCardModel } from "../models/LeaderCardModel";
import { CharacterCardModel } from "../models/CharacterCardModel";
import { EventCardModel } from "../models/EventCardModel";
import { StageCardModel } from "../models/StageCardModel";

export interface ICardsRepository {
  findById(id: string): Promise<Cards | null>;
  findByArt(art: string): Promise<Cards | null>;
  deleteCard(id: string): Promise<void>;
  createLeader(card: LeaderCardModel): Promise<void>;
  createCharacter(card: CharacterCardModel): Promise<void>;
  createEvent(card: EventCardModel): Promise<void>;
  createStage(card: StageCardModel): Promise<void>;
}
