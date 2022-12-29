import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateCardDto } from 'src/dto/create-card.dto';
import { UpdateCardDto } from 'src/dto/update-card.dto';
import { CardService } from 'src/service/card/card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async createCard(@Res() response, @Body() createCardDto: CreateCardDto) {
    try {
      const newCard = await this.cardService.createCard(createCardDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Card has been created successfully',
        newCard,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Card is not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateCard(
    @Res() response,
    @Param('id') cardId: string,
    @Body() updateCardDto: UpdateCardDto
  ) {
    try {
      const existingCard = await this.cardService.updateCard(
        cardId,
        updateCardDto
      );
      return response.status(HttpStatus.OK).json({
        message: 'Card has been successfully updated',
        existingCard,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getCards(@Res() response) {
    try {
      const cardsData = await this.cardService.getAllCards();
      return response.status(HttpStatus.OK).json({
        message: 'All cards data found successfully',
        cardsData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getCard(@Res() response, @Param('id') cardId: string) {
    try {
      const existingCard = await this.cardService.getCard(cardId);
      return response.status(HttpStatus.OK).json({
        message: 'Card found successfully',
        existingCard,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteCard(@Res() response, @Param('id') cardId: string) {
    try {
      const deletedCard = await this.cardService.deleteCard(cardId);
      return response.status(HttpStatus.OK).json({
        message: 'Card deleted successfully',
        deletedCard,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
