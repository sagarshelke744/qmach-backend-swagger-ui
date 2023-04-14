import { ProductModuleEnum } from './../constant';
import {
  IsString,
  IsNumber,
  IsMongoId,
  IsNotEmpty,
  IsArray,
  IsEnum,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsArray()
  descriptions: string[];

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsMongoId()
  productCategory: string;

  @IsString()
  @IsOptional()
  processingArea: string;

  @IsOptional()
  @IsNumber()
  total: number;

  @IsString()
  @IsOptional()
  note: string;
}

export class ProductCategorySearch {

  @IsOptional()
  @IsEnum(ProductModuleEnum)
  productType: ProductModuleEnum;


  @IsOptional()
  @IsString()
  productCategory: string;


  @IsOptional()
  @IsString()
  isQuatationProducts: string;
}
