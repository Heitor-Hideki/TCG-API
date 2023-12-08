import { Deck } from "./Deck";
import { randomUUID } from 'crypto'

export class User {
  public id: string;
  public name: string;

  constructor(props: Omit<User, 'id'>, id?: string){
    Object.assign(this, props);

    if(!id){
      this.id = randomUUID();
    }
  }
}

export class AdminUser extends User {
}

export class RegularUser extends User {
  public decks: Deck[];

  constructor(props: Omit<RegularUser,'id'>, id?: string){
    super(props);
    this.decks = props.decks;

    if(!id){
      this.id = randomUUID();
    }
  }
}
