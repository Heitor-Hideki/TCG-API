import { Card } from "./CreateCardDTO";

export class Deck {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  public addCard(card: Card): void {
    this.cards.push(card)
  }

  public removeCard(card: Card): void {
    this.cards.filter(deckCard => deckCard !== card)
  }
}
