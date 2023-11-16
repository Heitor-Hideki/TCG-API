import { Router } from "express";
import { Card, CharacterCard } from "../models/cardModel";

const cardRoutes = Router();

cardRoutes.get('/', (request, response) => {
  const Jinbe: CharacterCard = new CharacterCard({cost: 7});
  const summonCard = (card: Card) => {
    card.summon();
  }

  summonCard(Jinbe);

  response.status(200).json({})
})

export { cardRoutes }