import { enum_card_colors, enum_card_rarities } from "@prisma/client";
import { AppError } from "../errors/AppError";
import { TCard, TCharacterCard, TEventCard, TLeaderCard, TStageCard } from "../types/TCard";
import { CreateCardService } from "../services/cards/CreateCardService";

export class Card {
  private id: string;
  private name: string;
  private affiliation: string[];
  private colors: enum_card_colors[];
  private rarity: enum_card_rarities;

  constructor(
    id: string,
    name: string,
    affiliation: string[],
    colors: enum_card_colors[],
    rarity: enum_card_rarities
  ) {
    this.id = id;
    this.name = name;
    this.affiliation = affiliation;
    this.colors = colors;
    this.rarity = rarity
  }

  public get(): Card {
    return this
  }
  public getInfos(): TCard {
    return {
      id: this.id,
      name: this.name,
      affiliation: this.affiliation,
      colors: this.colors,
      rarity: this.rarity,
    }
  }
  public create(createCardService: CreateCardService): void {}
  public update(): void {}
  public delete(): void {}
}

export class LeaderCard extends Card {
  private health: number;
  private power: number;
  private effect: string;

  constructor(id: string, name: string, affiliation: string[], colors: enum_card_colors[], rarity: enum_card_rarities, health: number, power: number, effect: string){
    super(id, name, affiliation, colors, rarity);
    this.health = health;
    this.power = power;
    this.effect = effect;
  }

  public get(): LeaderCard {
    return this
  }

  public getLeaderInfos(): TLeaderCard {
    const extendedInfos = this.getInfos()
    return {
      id: extendedInfos.id,
      name: extendedInfos.name,
      affiliation: extendedInfos.affiliation,
      colors: extendedInfos.colors,
      rarity: extendedInfos.rarity,
      health: this.health,
      power: this.power,
      effect: this.effect
    }
  }

  public async create(createCardService: CreateCardService): Promise<void> {
    await createCardService.createLeader(this)
  }

  public update(): void {
    console.log("updated leader")
  }

  public delete(): void {
    console.log("deleted leader")
  }

  public validate(): void {
    throw new AppError('Card already exists')
  }

  public alreadyExists(): boolean {
    return false;
  }
}

export class CharacterCard extends Card {
  private power: number;
  private cost: number;
  private counter: number|null;
  private effect: string|null;
  private trigger_effect: string|null;

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

  public getCharacterInfos(): TCharacterCard {
    const extendedInfos = this.getInfos()
    return {
      id: extendedInfos.id,
      name: extendedInfos.name,
      affiliation: extendedInfos.affiliation,
      colors: extendedInfos.colors,
      rarity: extendedInfos.rarity,
      power: this.power,
      cost: this.cost,
      counter: this.counter,
      effect: this.effect,
      trigger_effect: this.trigger_effect,
    }
  }

  public async create(createCardService: CreateCardService): Promise<void> {
    await createCardService.createCharacter(this)
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
  private effect: string|null;
  private trigger_effect: string|null;

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

  public getEventInfos(): TEventCard {
    const extendedInfos = this.getInfos()
    return {
      id: extendedInfos.id,
      name: extendedInfos.name,
      affiliation: extendedInfos.affiliation,
      colors: extendedInfos.colors,
      rarity: extendedInfos.rarity,
      cost: this.cost,
      effect: this.effect,
      trigger_effect: this.trigger_effect,
    }
  }

  public async create(createCardService: CreateCardService): Promise<void> {
    await createCardService.createEvent(this)
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
  private effect: string|null;

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

  public getStageInfos(): TStageCard {
    const extendedInfos = this.getInfos()
    return {
      id: extendedInfos.id,
      name: extendedInfos.name,
      affiliation: extendedInfos.affiliation,
      colors: extendedInfos.colors,
      rarity: extendedInfos.rarity,
      cost: this.cost,
      effect: this.effect,
    }
  }


  public async create(createCardService: CreateCardService): Promise<void> {
    createCardService.createStage(this);
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
