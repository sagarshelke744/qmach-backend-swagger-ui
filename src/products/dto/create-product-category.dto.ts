import { ProductModuleEnum } from '../constant';
import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';

export class CreateProductTypeDto {
  @IsNotEmpty()
  @IsEnum(Object.values(ProductModuleEnum))
  productType: string;

  @IsString()
  @IsOptional()
  productSubType: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  processingArea: string;
}
