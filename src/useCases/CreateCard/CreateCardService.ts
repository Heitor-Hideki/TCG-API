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

    // switch(data.card_type){
    //   case "LEADER":
    //     await this.cardsRepository.createLeader(data);
    //   case "CHARACTER":
    //     await this.cardsRepository.createCharacter(data);
    //   case "EVENT":
    //     await this.cardsRepository.createEvent(data);
    //   case "STAGE":
    //     await this.cardsRepository.createStage(data);
    // }
  }
}

export { CreateCardService }
