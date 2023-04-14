import { QuotationPricingDto } from './create-quotation-pricing.dto';
import { CreateQuatationProductItemDto } from './create-quatation-product-item.dto';
import {
  IsNotEmpty,
  IsMongoId,
  IsOptional,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';
export class CreateQuatationDto {
  @IsNotEmpty()
  @IsMongoId()
  productCategory: string;

  @IsOptional()
  @IsMongoId()
  productCategoryDescription: string;

  @IsOptional()
  @IsMongoId()
  quatationProductCatDesc: string;

  @IsOptional()
  quatationProduct: CreateQuatationProductItemDto[];

  @IsMongoId()
  @IsOptional()
  client: string;

  @IsString()
  @IsOptional()
  processingArea: string;

  @IsArray()
  @IsOptional()
  summary: Summary[];

  @IsOptional()
  quotationPricingData: QuotationPricingDto;

  @IsOptional()
  quotationPricing: string;
}

export class Summary {
  
  @IsString()
  area: string;

  @IsString()
  value: string;
}
export class QuatationSearch  {

  @IsOptional()
  @IsString()
  id: string;

}