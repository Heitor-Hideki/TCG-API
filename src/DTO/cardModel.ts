import { enum_card_colors, enum_card_rarities } from "@prisma/client";
import { AppError } from "../errors/AppError";

export class Card {
  private id: String;
  private name: String;
  private affiliation: String[];
  private colors: enum_card_colors[];
  private rarity: enum_card_rarities;

  constructor(id: string, name: string, affiliation: string[], colors: enum_card_colors[], rarity: enum_card_rarities) {
    this.id = id;
    this.name = name;
    this.affiliation = affiliation;
    this.colors = colors;
    this.rarity = rarity
  }

  public get(): Card {
    return this
  }
  public create(): void {}
  public update(): void {}
  public delete(): void {}
}

export class LeaderCard extends Card {
  private power: number = 5000;
  private cost: number;
  private effect: String;

  constructor(id: string, name: string, affiliation: string[], colors: enum_card_colors[], rarity: enum_card_rarities, cost: number, effect: string){
    super(id, name, affiliation, colors, rarity);
    this.cost = cost;
    this.effect = effect;
  }

  public get(): LeaderCard {
    return this
  }

  public create(): void {
    console.log("created leader")
  }

  public update(): void {
    console.log("updated leader")
  }

  public delete(): void {
    console.log("deleted leader")
  }

  public validate(): void {
    if(this.alreadyExists()){
      throw new AppError('Card already exists')
    }
  }

  public alreadyExists(): boolean {
    return false;
  }
}

// export class DONCard extends Card {
//   public rested: boolean = false;

//   constructor(card: Card){
//     super(card.name);
//   }

//   public get(): DONCard {
//     return this
//   }

//   public create(): void {
//     console.log("created DON")
//   }

//   public update(): void {
//     console.log("updated DON")
//   }

//   public delete(): void {
//     console.log("deleted DON")
//   }

//   public validate(): void {
//     if(this.alreadyExists()){
//       throw new AppError('Card already exists')
//     }
//   }

//   public alreadyExists(): boolean {
//     return false;
//   }
// }

export class CharacterCard extends Card {
  private power: number;
  private cost: number;
  private counter: number|null;
  private effect: String|null;
  private trigger_effect: String|null;

  constructor(
    id: string,
    name: string,
    affiliation: string[],
    colors: enum_card_colors[],
    rarity: enum_card_rarities,
    power: number,
    cost: number,
    counter:number|null,
    effect: string|null,
    trigger_effect: string|null
  ){
    super(id, name, affiliation, colors, rarity);
    this.power = power;
    this.cost = cost;
    this.counter = counter;
    this.effect = effect;
    this.trigger_effect = trigger_effect;
  }

  public get(): CharacterCard {
    return this
  }

  public create(): void {
    console.log("created Character")
  }

  public update(): void {
    console.log("updated Character")
  }

  public delete(): void {
    console.log("deleted Character")
  }

  public validate(): void {
    if(this.alreadyExists()){
      throw new AppError('Card already exists')
    }
  }

  public alreadyExists(): boolean {
    return false;
  }
}

export class EventCard extends Card {
  private cost: number;
  private effect: String|null;
  private trigger_effect: String|null;

  constructor(
    id: string,
    name: string,
    affiliation: string[],
    colors: enum_card_colors[],
    rarity: enum_card_rarities,
    cost: number,
    effect: string|null,
    trigger_effect: string|null
  ){
    super(id, name, affiliation, colors, rarity);
    this.cost = cost;
    this.effect = effect;
    this.trigger_effect = trigger_effect;
  }

  public get(): EventCard {
    return this
  }

  public create(): void {
    console.log("created Event")
  }

  public update(): void {
    console.log("updated Event")
  }

  public delete(): void {
    console.log("deleted Event")
  }

  public validate(): void {
    if(this.alreadyExists()){
      throw new AppError('Card already exists')
    }
  }

  public alreadyExists(): boolean {
    return false;
  }
}

export class StageCard extends Card {
  private cost: number;
  private effect: String|null;

  constructor(
    id: string,
    name: string,
    affiliation: string[],
    colors: enum_card_colors[],
    rarity: enum_card_rarities,
    cost: number,
    effect: string|null,
  ){
    super(id, name, affiliation, colors, rarity);
    this.cost = cost;
    this.effect = effect;
  }

  public get(): StageCard {
    return this
  }

  public create(): void {
    console.log("created Stage")
  }

  public update(): void {
    console.log("updated Stage")
  }

  public delete(): void {
    console.log("deleted Stage")
  }

  public validate(): void {
    if(this.alreadyExists()){
      throw new AppError('Card already exists')
    }
  }

  public alreadyExists(): boolean {
    return false;
  }
}
