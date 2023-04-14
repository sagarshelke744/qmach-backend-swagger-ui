import {
  IsNotEmpty,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreateQuatationProductItemDto {
  @IsNotEmpty()
  @IsMongoId()
  product: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  advanceAmount: number;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  total: number;

  @IsOptional()
  @IsString()
  title: string;


  @IsOptional()
  @IsString()
  note: string;
}
