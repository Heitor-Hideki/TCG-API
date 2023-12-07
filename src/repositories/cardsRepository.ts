import { PrismaClient } from '@prisma/client'
import { AppError } from '../errors/AppError';
import { ICardsRepository } from './ICardsRepository';

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
      throw new AppError('Error finding car')
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
}

export { CardsRepository }
