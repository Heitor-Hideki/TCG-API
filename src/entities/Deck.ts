import { Card } from "./Card";

export class Deck {
  public cards: {card: Card, quantity: Number}[];

  constructor(props: {card: Card, quantity: Number}[]) {
    this.cards = props;
  }
}
