import { enum_card_colors, enum_card_rarities } from "@prisma/client";
import { randomUUID } from 'crypto'

export class Card {
  public id: string;

  public name: string;
  public art: string;
  public affiliation: string[];
  public colors: enum_card_colors[];
  public rarity: enum_card_rarities;

  constructor(props: Omit<Card, "id">, id?: string){
    Object.assign(this, props)

    if(!id){
      this.id = randomUUID();
    }
  }
}

export class LeaderCard extends Card {
  public health: number;
  public power: number;
  public effect: string;

  constructor(props: Omit<LeaderCard, 'id'>, id?: string){
    super(props);
    this.health = props.health;
    this.power = props.power;
    this.effect = props.effect;

    if(!id){
      this.id = randomUUID();
    }
  }
}

export class CharacterCard extends Card {
  public power: number;
  public cost: number;
  public counter: number|null;
  public effect: string|null;
  public trigger_effect: string|null;

  constructor(props: Omit<CharacterCard, 'id'>, id?: string){
    super(props);
    this.power = props.power;
    this.cost = props.cost;
    this.counter = props.counter;
    this.effect = props.effect;
    this.trigger_effect = props.trigger_effect;

    if(!id){
      this.id = randomUUID();
    }
  }
}

export class EventCard extends Card {
  public cost: number;
  public effect: string|null;
  public trigger_effect: string|null;

  constructor(props: Omit<EventCard, 'id'>, id?: string){
    super(props);
    this.cost = props.cost;
    this.effect = props.effect;
    this.trigger_effect = props.trigger_effect;

    if(!id){
      this.id = randomUUID();
    }
  }
}

export class StageCard extends Card {
  public cost: number;
  public effect: string|null;

  constructor(props: Omit<StageCard, 'id'>, id?:string){
    super(props);
    this.cost = props.cost;
    this.effect = props.effect;

    if(!id){
      this.id = randomUUID();
    }
  }
}

