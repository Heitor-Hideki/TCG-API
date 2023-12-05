import { Card, CharacterCard, EventCard, LeaderCard, StageCard } from "../../DTO/cardModel";
import { CreateCardService } from "../../services/cards/CreateCardService";

import { TCharacterCard, TEventCard, TLeaderCard, TStageCard  } from "../../types/TCard";

class CreateCardController {
  private async create(card: Card){
    const createCardService = new CreateCardService();
    await card.create(createCardService)
  }

  public async createLeader(card: TLeaderCard){
    const leaderCard = new LeaderCard(
      card.id,
      card.name,
      card.affiliation,
      card.colors,
      card.rarity,
      card.health,
      card.power,
      card.effect,
    );

    leaderCard.validate();
    await this.create(leaderCard);
  }

  public createCharacter(card: TCharacterCard){
    const characterCard = new CharacterCard(
      card.id,
      card.name,
      card.affiliation,
      card.colors,
      card.rarity,
      card.power,
      card.cost,
      card.counter,
      card.effect,
      card.trigger_effect,
    );

    characterCard.validate();
    this.create(characterCard);
  }

  public createEvent(card: TEventCard){
    const eventCard = new EventCard(
      card.id,
      card.name,
      card.affiliation,
      card.colors,
      card.rarity,
      card.cost,
      card.effect,
      card.trigger_effect,
    );
    eventCard.validate();
    this.create(eventCard);
  }

  public createStage(card: TStageCard){
    const eventCard = new StageCard(
      card.id,
      card.name,
      card.affiliation,
      card.colors,
      card.rarity,
      card.cost,
      card.effect,
    );
    eventCard.validate();
    this.create(eventCard);
  }
}

export { CreateCardController }
