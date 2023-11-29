import { PrismaClient } from '@prisma/client'
import { CharacterCard, EventCard, LeaderCard, StageCard } from '../DTO/cardModel';
import { AppError } from '../errors/AppError';

const prisma = new PrismaClient();

class CardsRepository {
  public async createLeader(leaderCard: LeaderCard) {
    try {
      const cardInfos = leaderCard.getLeaderInfos();
      await prisma.cards.create({
        data: {
          card_type: 'LEADER',
          id: cardInfos.id,
          name: cardInfos.name,
          affiliation: cardInfos.affiliation,
          colors: cardInfos.colors,
          rarity: cardInfos.rarity,
          health: cardInfos.health,
          power: cardInfos.power,
          effect: cardInfos.effect
        }
      })
    } catch (error) {
      console.log(error)
      throw new AppError('Error creating leader')
    }
  }

  public async createCharacter(characterCard: CharacterCard){
    try {
      const cardInfos = characterCard.getCharacterInfos();
      await prisma.cards.create({
        data: {
          card_type: 'CHARACTER',
          id: cardInfos.id,
          name: cardInfos.name,
          affiliation: cardInfos.affiliation,
          colors: cardInfos.colors,
          rarity: cardInfos.rarity,
          power: cardInfos.power,
          effect: cardInfos.effect,
          trigger_effect: cardInfos.trigger_effect,
          counter: cardInfos.counter,
        }
      })
    } catch (error) {
      throw new AppError('Error creating character')
    }
  }

  public async createEvent(eventCard: EventCard){
    try {
      const cardInfos = eventCard.getEventInfos();
      await prisma.cards.create({
        data: {
          card_type: 'EVENT',
          id: cardInfos.id,
          name: cardInfos.name,
          affiliation: cardInfos.affiliation,
          colors: cardInfos.colors,
          rarity: cardInfos.rarity,
          effect: cardInfos.effect,
          trigger_effect: cardInfos.trigger_effect,
        }
      })
    } catch (error) {
      throw new AppError('Error creating event')
    }
  }

  public async createStage(stageCard: StageCard){
    try {
      const cardInfos = stageCard.getStageInfos();
      await prisma.cards.create({
        data: {
          card_type: 'STAGE',
          id: cardInfos.id,
          name: cardInfos.name,
          affiliation: cardInfos.affiliation,
          colors: cardInfos.colors,
          rarity: cardInfos.rarity,
          effect: cardInfos.effect,
        }
      })
    } catch (error) {
      throw new AppError('Error creating stage')
    }
  }

  public async findCard(id: string){
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
