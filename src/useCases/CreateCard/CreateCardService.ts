import { CreateCardModel } from "./CreateCardModel";
import { AppError } from "../../errors/AppError";
import { ICardsRepository } from "../../repositories/ICardsRepository";

class CreateCardService {
  constructor(
    private readonly cardsRepository: ICardsRepository
  ){}

  public async execute(data: CreateCardModel) {
    const findCard = await this.cardsRepository.findByArt(data.art);

    if(findCard) {
      throw new AppError('Card already exists');
    };

    switch(data.card_type){
      case "LEADER":
        if(!data.health || !data.power || !data.effect){
          throw new AppError('Invalid params');
        }

        await this.cardsRepository.createLeader({
          art: data.art,
          affiliation: data.affiliation,
          colors: data.colors,
          effect: data.effect,
          health: data.health,
          name: data.name,
          power: data.power,
          rarity: data.rarity
        });
      case "CHARACTER":
        if(!data.cost || !data.power){
          throw new AppError('Invalid params');
        }

        await this.cardsRepository.createCharacter({
          art: data.art,
          affiliation: data.affiliation,
          colors: data.colors,
          effect: data.effect || null,
          name: data.name,
          power: data.power,
          counter: data.counter || null,
          rarity: data.rarity,
          cost: data.cost,
          trigger_effect: data.trigger_effect || null,
        });
      case "EVENT":
        if(!data.cost || !data.effect){
          throw new AppError('Invalid params');
        }

        await this.cardsRepository.createEvent({
          art: data.art,
          affiliation: data.affiliation,
          colors: data.colors,
          effect: data.effect,
          name: data.name,
          rarity: data.rarity,
          cost: data.cost,
          trigger_effect: data.trigger_effect || null,
        });
      case "STAGE":
        if(!data.cost || !data.effect){
          throw new AppError('Invalid params');
        }

        await this.cardsRepository.createStage({
          art: data.art,
          affiliation: data.affiliation,
          colors: data.colors,
          effect: data.effect,
          name: data.name,
          rarity: data.rarity,
          cost: data.cost,
        });
    }
  }
}

export { CreateCardService }
