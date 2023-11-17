import { Card, CharacterCard, DONCard, EventCard, LeaderCard, StageCard } from "../../DTO/cardModel";

import { TCard, TLeaderCard  } from "../../types/TCard";

class CreateCardService {
  private create(card: TCard){
    const cardModel = new Card(card.name)

    cardModel.create()
  }

  public createLeader(card: TLeaderCard){
    const leaderCardModel = new LeaderCard(
      card.name,
      card.colors,
      card.rarity,
    );

    leaderCardModel.validate();
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
