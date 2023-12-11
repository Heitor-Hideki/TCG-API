import { Cards, PrismaClient } from '@prisma/client'
import { AppError } from '../errors/AppError';
import { ICardsRepository } from './ICardsRepository';
import { randomUUID } from 'crypto'
import { CreateCardModel } from '../useCases/CreateCard/CreateCardModel';
import { LeaderCardModel } from '../models/LeaderCardModel';
import { CharacterCardModel } from '../models/CharacterCardModel';
import { EventCardModel } from '../models/EventCardModel';
import { StageCardModel } from '../models/StageCardModel';

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

  public async createLeader(card: LeaderCardModel): Promise<void> {
    try {
      await prisma.cards.create({
        data: {...card, card_type: 'LEADER'}
      });
    } catch (error) {
      throw new AppError('Error creating leader')
    }
  }

  public async createCharacter(card: CharacterCardModel): Promise<void> {
    try {
      await prisma.cards.create({
        data: {...card, card_type: 'CHARACTER'}
      });
    } catch (error) {
      throw new AppError('Error creating character')
    }
  }

  public async createEvent(card: EventCardModel): Promise<void> {
    try {
      await prisma.cards.create({
        data: {...card, card_type: 'EVENT'}
      });
    } catch (error) {
      throw new AppError('Error creating event')
    }
  }

  public async createStage(card: StageCardModel): Promise<void> {
    try {
      await prisma.cards.create({
        data: {...card, card_type: 'STAGE'}
      });
    } catch (error) {
      throw new AppError('Error creating stage')
    }
  }
}

export { CardsRepository }
