import { Router } from "express";
import { CreateCardController } from "../controllers/Cards/CreateCardController";
import { DeleteCardService } from "../controllers/Cards/DeleteCardService";
import { randomUUID } from 'crypto'
import { UpdateCardController } from "../controllers/Cards/UpdateCardContreoller";
import { FindCardService } from "../services/cards/FindCardService";

const cardRoutes = Router();

cardRoutes.get('/:name', (request, response) => {
  response.status(200).json({})
})

cardRoutes.get('/listAll', (request, response) => {
  response.status(200).json({})
})

cardRoutes.post('/leader', async (request, response) => {
  const {
    name,
    affiliation,
    colors,
    rarity,
    health,
    power,
    effect,
  } = request.body

  const createCardController = new CreateCardController();
  await createCardController.createLeader({
    id: randomUUID(),
    name,
    affiliation,
    colors,
    rarity,
    health,
    power,
    effect,
  });

  response.status(200).json({})
})

cardRoutes.patch('/:id', async (request, response) => {
  const { id } = request.params;

  const findCardService = new FindCardService();
  const updateCardController = new UpdateCardController(findCardService);
  await updateCardController.update(id);

  response.status(200).json({})
})

cardRoutes.delete('/:name', (request, response) => {
  const { name } = request.params

  const deleteCardService = new DeleteCardService();
  deleteCardService.execute({name})

  response.status(200).json({})
})

export { cardRoutes }
