import { Card } from "../../DTO/cardModel";
import { AppError } from "../../errors/AppError";
import { FindCardService } from "../../services/cards/FindCardService";
import { UpdateCardService } from "../../services/cards/UpdateCardService";

class UpdateCardController {
  constructor(
    private readonly findCardService: FindCardService
  ){}

  public async update (id: string){
    const card: Card|undefined = await this.findCardService.findById(id);

    if(!card){
      throw new AppError('Card not found', 404);
    }

    const updateCardService = new UpdateCardService();
    await card.update(updateCardService);
  }
}

export { UpdateCardController }
