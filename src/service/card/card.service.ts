import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCardDto } from 'src/dto/create-card.dto';
import { UpdateCardDto } from 'src/dto/update-card.dto';
import { ICard } from 'src/interface/card.interface';

@Injectable()
export class CardService {
  constructor(@InjectModel('Card') private cardModel: Model<ICard>) {}

  async createCard(createCardDto: CreateCardDto): Promise<ICard> {
    const newCard = await new this.cardModel(createCardDto);
    return newCard.save();
  }

  async updateCard(
    cardId: string,
    updateCardDto: UpdateCardDto
  ): Promise<ICard> {
    const existingCard = await this.cardModel.findByIdAndUpdate(
      cardId,
      updateCardDto,
      { new: true }
    );
    if (!existingCard) {
      throw new NotFoundException(`Card #${cardId} not found`);
    }
    return existingCard;
  }

  async getAllCards(): Promise<ICard[]> {
    const cardsData = await this.cardModel.find();
    return cardsData;
  }

  async getCard(cardId: string): Promise<ICard> {
    const existingCard = await this.cardModel.findById(cardId).exec();
    if (!existingCard) {
      throw new NotFoundException(`Card #${cardId} not found`);
    }
    return existingCard;
  }

  async deleteCard(cardId: string): Promise<ICard> {
    const deletedCard = await this.cardModel.findByIdAndDelete(cardId);
    if (!deletedCard) {
      throw new NotFoundException(`Card #${cardId} not found`);
    }
    return deletedCard;
  }
}
