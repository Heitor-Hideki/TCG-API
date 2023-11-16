import { Router } from 'express'
import { cardRoutes } from './cardRoutes';

const routes = Router();

routes.use('/v1/card', cardRoutes)

export { routes }