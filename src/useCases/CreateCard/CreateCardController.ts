import { Request, Response } from "express";
import { CreateCardService } from "./CreateCardService";

class CreateCardController {
  constructor(
    private readonly createCardService: CreateCardService
  ){}

  public async handle (request: Request, response: Response): Promise<Response>{
    const {
      name,
      affiliation,
      cost,
      art,
      health,
      power,
      counter,
      effect,
      trigger_effect,
      rarity,
      colors,
      card_type,
    } = request.body

    await this.createCardService.execute({
      name,
      affiliation,
      art,
      cost,
      health,
      power,
      counter,
      effect,
      trigger_effect,
      rarity,
      colors,
      card_type,
    })

    return response.status(204).json({})
  }
}

export { CreateCardController }
