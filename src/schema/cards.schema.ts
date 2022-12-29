import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Card {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop()
  updatedAt: Date;
  @Prop()
  backgroundImage: string;
}
export const CardSchema = SchemaFactory.createForClass(Card);
