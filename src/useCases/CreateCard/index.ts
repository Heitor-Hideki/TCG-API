import { CardsRepository } from "../../repositories/cardsRepository";
import { CreateCardController } from "./CreateCardController";
import { CreateCardService } from "./CreateCardService";

const cardsRepository = new CardsRepository();

const createCardService = new CreateCardService(cardsRepository);

export const createCardController = new CreateCardController(createCardService);
