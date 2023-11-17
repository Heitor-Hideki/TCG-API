import { Deck } from "./deckModel";

export interface User {
  name: string;
}

export class AdminUser implements User {
  public name: string;

  constructor(name: string){
    this.name = name;
  }
}

export class RegularUser implements User {
  public name: string;
  public decks: Deck[];

  constructor(name: string, decks: Deck[]){
    this.name = name;
    this.decks = decks;
  }
}
