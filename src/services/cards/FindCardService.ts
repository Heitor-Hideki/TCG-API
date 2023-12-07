import { Card, CharacterCard, EventCard, LeaderCard, StageCard } from "../../DTO/CreateCardDTO";
import { CardsRepository } from "../../repositories/cardsRepository";

class FindCardService {
  private readonly cardsRepository: CardsRepository = new CardsRepository();

  public async findById(id: string): Promise<Card|undefined> {
    const result = await this.cardsRepository.findById(id);

    switch(result?.card_type){
      case "LEADER":
        return new LeaderCard(
          result.id,
          result.name,
          result.affiliation,
          result.colors,
          result.rarity,
          result.health||0,
          result.power||0,
          result.effect||''
        );
      case "CHARACTER":
        return new CharacterCard(
          result.id,
          result.name,
          result.affiliation,
          result.colors,
          result.rarity,
          result.power||0,
          result.cost||0,
          result.counter,
          result.effect,
          result.trigger_effect
        );
      case "EVENT":
        return new EventCard(
          result.id,
          result.name,
          result.affiliation,
          result.colors,
          result.rarity,
          result.cost||0,
          result.effect,
          result.trigger_effect
        );
      case "STAGE":
        return new StageCard(
          result.id,
          result.name,
          result.affiliation,
          result.colors,
          result.rarity,
          result.cost||0,
          result.effect
        )
      default:
        return undefined;
    }
  }
}

export { FindCardService }
