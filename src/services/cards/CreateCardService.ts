import { ICreateCardDTO } from "../../DTO/CreateCardDTO";
import { AppError } from "../../errors/AppError";
import { ICardsRepository } from "../../repositories/ICardsRepository";

class CreateCardService {
  constructor(
    private cardsRepository: ICardsRepository
  ){}

  public async execute(data: ICreateCardDTO) {
    const findCard = await this.cardsRepository.findById(data.id);

    if(findCard) {
      throw new AppError('Card already exists');
    }
  }
}

export { CreateCardService }
