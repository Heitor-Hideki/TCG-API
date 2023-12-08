import { ICreateCardDTO } from "./CreateCardDTO";
import { AppError } from "../../errors/AppError";
import { ICardsRepository } from "../../repositories/ICardsRepository";
import { Card } from "../../entities/Card";

class CreateCardService {
  constructor(
    private readonly cardsRepository: ICardsRepository
  ){}

  public async execute(data: ICreateCardDTO) {
    const findCard = await this.cardsRepository.findByArt(data.art);

    if(findCard) {
      throw new AppError('Card already exists');
    };

    await this.cardsRepository.createCard(data);
  }
}

export { CreateCardService }
