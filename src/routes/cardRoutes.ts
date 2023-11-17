import { Router } from "express";
import { CreateCardService } from "../services/Cards/CreateCardService";
import { LeaderCard } from "../DTO/cardModel";
import { DeleteCardService } from "../services/Cards/DeleteCardService";

const cardRoutes = Router();

cardRoutes.get('/:name', (request, response) => {
  response.status(200).json({})
})

cardRoutes.get('/listAll', (request, response) => {
  response.status(200).json({})
})

cardRoutes.post('/leader', (request, response) => {
  const {
    name,
    colors,
    rarity
  } = request.body

  // const card = new LeaderCard(name, colors, rarity)

  const createCardService = new CreateCardService();
  createCardService.createLeader({
    name,
    colors,
    rarity,
  });

  response.status(200).json({})
})

cardRoutes.patch('/:name', (request, response) => {
  response.status(200).json({})
})

cardRoutes.delete('/:name', (request, response) => {
  const { name } = request.params

  const deleteCardService = new DeleteCardService();
  deleteCardService.execute({name})

  response.status(200).json({})
})

export { cardRoutes }
