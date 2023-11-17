import { AppError } from "../errors/AppError";

export class Card {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public get(): Card {
    const card = new Card('nome')

    return card
  }
  public create(): void {}
  public update(): void {}
  public delete(): void {}
}

export class LeaderCard implements Card {
  public power: number = 5000;
  public name: string;
  public colors: string[];
  public rarity: string;

  constructor(name: string, colors: string[], rarity: string){
    this.name = name;
    this.colors = colors;
    this.rarity = rarity;
  }

  public get(): LeaderCard {
    const card = new LeaderCard('nome', ['cor'], 'R')

    return card
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

export class DONCard implements Card {
  public rested: boolean = false;
  public name: string;

  constructor(name: string){
    this.name = name;
  }

  public get(): DONCard {
    const card = new DONCard('nome')

    return card
  }

  public create(): void {
    console.log("created DON")
  }

  public update(): void {
    console.log("updated DON")
  }

  public delete(): void {
    console.log("deleted DON")
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

export class CharacterCard implements Card {
  public power: number;
  public cost: number;
  public name: string;
  public color: string;

  constructor(power: number, cost:number, name: string, color: string){
    this.power = power;
    this.cost = cost;
    this.name = name;
    this.color = color;
  }

  public get(): CharacterCard {
    const card = new CharacterCard(2000, 2, 'nome', 'cor')

    return card
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

export class EventCard implements Card {
  private effect: string;
  private cost: number;
  public name: string;
  public color: string;

  constructor(effect: string, cost: number, name: string, color: string){
    this.effect = effect;
    this.cost = cost;
    this.name = name;
    this.color = color;
  }

  public get(): EventCard {
    const card = new EventCard('efeito', 2, 'nome', 'cor')

    return card
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

export class StageCard implements Card {
  private effect: string;
  private cost: number;
  public name: string;
  public color: string;

  constructor(effect: string, cost: number, name: string, color: string){
    this.effect = effect;
    this.cost = cost;
    this.name = name;
    this.color = color;
  }

  public get(): StageCard {
    const card = new StageCard('efeito', 2, 'nome', 'cor')

    return card
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