import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty } from 'class-validator';
import { CreateCardDto } from './create-card.dto';

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @IsDate()
  @IsNotEmpty()
  readonly updatedAt: Date;
}
