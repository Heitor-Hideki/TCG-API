import { Deck } from "./deckModel";

export class User {
  public decks: Deck[];

  constructor(decks: Deck[]){
    this.decks = decks;
  }
}