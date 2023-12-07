import { Card } from "../entities/Card";

export interface ICardsRepository {
  findById(id: string): Promise<Card>;
  deleteCard(id: string): Promise<void>;
  createCard(card: Card): Promise<void>;
}
