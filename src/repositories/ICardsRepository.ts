import { Cards } from "@prisma/client";
import { ICreateCardDTO } from "../useCases/CreateCard/CreateCardDTO";

export interface ICardsRepository {
  findById(id: string): Promise<Cards | null>;
  findByArt(art: string): Promise<Cards | null>;
  deleteCard(id: string): Promise<void>;
  createCard(card: ICreateCardDTO): Promise<void>;
}
