import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardController } from './controller/card/card.controller';
import { CardSchema } from './schema/cards.schema';
import { CardService } from './service/card/card.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'carddb',
    }),
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }]),
  ],
  controllers: [AppController, CardController],
  providers: [AppService, CardService],
})
export class AppModule {}
