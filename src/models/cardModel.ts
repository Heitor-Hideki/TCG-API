interface ICard {
  cost: number;
}

export class Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }

  public summon(): void {};
}

export class LeaderCard implements Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }

  public summon(): void {
    console.log("summoned leader")
  }
}

export class DONCard implements Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }

  public summon(): void {
    console.log("summoned DON")
  }
}

export class CharacterCard implements Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }

  public summon(): void {
    console.log("summoned Character")
  }
}

export class EventCard implements Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }

  public summon(): void {
    console.log("summoned Event")
  }
}  

export class StageCard implements Card {
  public cost: number;

  constructor({
    cost
  }: ICard){
    this.cost = cost;
  }
  
  public summon(): void {
    console.log("summoned Stage")
  }
}