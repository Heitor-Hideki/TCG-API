import { Card, CharacterCard, DONCard, EventCard, LeaderCard, StageCard } from "../../models/cardModel";

class CreateCardService {
  private create(card: Card){
    card.create()    
  }

  public createLeader(card: LeaderCard){
    card.validate();
    this.create(card);
  }

  public createDON(card: DONCard){
    card.validate();
    this.create(card);
  }

  public createCharacter(card: CharacterCard){
    card.validate();
    this.create(card);
  }

  public createEvent(card: EventCard){
    card.validate();
    this.create(card);
  }

  public createStage(card: StageCard){
    card.validate();
    this.create(card);
  }
}

export { CreateCardService }