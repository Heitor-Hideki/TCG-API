import { CharacterCard, EventCard, LeaderCard, StageCard } from "../../DTO/cardModel";
import { CardsRepository } from "../../repositories/cardsRepository";

class CreateCardService {
  private readonly cardsRepository: CardsRepository = new CardsRepository();

  public async createLeader(card: LeaderCard){
    await this.cardsRepository.createLeader(card)
  }

  public async createCharacter(card: CharacterCard){
    await this.cardsRepository.createCharacter(card)
  }

  public async createEvent(card: EventCard){
    await this.cardsRepository.createEvent(card)
  }

  public async createStage(card: StageCard){
    await this.cardsRepository.createStage(card)
  }
}

export { CreateCardService }
