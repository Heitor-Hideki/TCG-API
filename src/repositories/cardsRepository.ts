import { $Enums, Cards, PrismaClient } from '@prisma/client'
import { AppError } from '../errors/AppError';
import { ICardsRepository } from './ICardsRepository';
import { Card } from '../entities/Card';
import { randomUUID } from 'crypto'
import { ICreateCardDTO } from '../DTO/CreateCardDTO';

const prisma = new PrismaClient();

class CardsRepository implements ICardsRepository {

  public async findById(id: string){
    try{
      const result = await prisma.cards.findUnique({
        where: {
          id
        }
      })

      return result;
    } catch (error) {
      throw new AppError('Error finding card')
    }
  }

  public async findByArt(art: string): Promise<Cards | null> {
    try {
      const result = await prisma.cards.findUnique({
        where: {
          art
        }
      })

      return result;
    } catch (error) {
      throw new AppError('Error finding card')
    }
  }

  public async deleteCard(id: string){
    try{
      await prisma.cards.delete({
        where: {
          id
        }
      });
    } catch (error) {
      throw new AppError('Error deleting card')
    }
  }

  public async createCard(data: ICreateCardDTO): Promise<void> {
    try {
      await prisma.cards.create({
        data: {
          id: randomUUID(),
          name: data.name,
          card_type: data.cardType,
          art: data.art,
          rarity: data.rarity,
          affiliation: data.affiliation,
          colors: data.colors,
          cost: data.cost,
          counter: data.counter,
          effect: data.effect,
          health: data.health,
          power: data.power,
          trigger_effect: data.triggerEffect
        }
      });
    } catch (error) {
      throw new AppError('Error creating card')
    }
  }
}

export { CardsRepository }
