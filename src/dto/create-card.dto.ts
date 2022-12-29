import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateCardDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(400)
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly backgroundImage: string;

  @IsDate()
  @IsNotEmpty()
  readonly createdAt: Date;
}
