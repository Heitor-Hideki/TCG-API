import { Router } from "express";
import { createCardController } from "../useCases/CreateCard";

const cardRoutes = Router();

cardRoutes.get('/:id', (request, response) => {
  response.status(200).json({})
})

cardRoutes.get('/listAll', (request, response) => {
  response.status(200).json({})
})

cardRoutes.post('/', async (request, response) => {
  return createCardController.handle(request, response);
})

cardRoutes.patch('/:id', async (request, response) => {
  const { id } = request.params;

  response.status(200).json({})
})

cardRoutes.delete('/:name', (request, response) => {
  const { name } = request.params

  response.status(200).json({})
})

export { cardRoutes }
