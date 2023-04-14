import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsMongoId,
} from 'class-validator';

export class CreateProductCategoryDescriptionDto {
  @IsString()
  @IsOptional()
  suitableForProcessing?: string;

  @IsString()
  @IsOptional()
  averageLiveWeight?: string;

  @IsString()
  @IsOptional()
  minimumWeight?: string;

  @IsString()
  @IsOptional()
  maximumWeight?: string;

  @IsString()
  @IsOptional()
  capacity?: string;

  @IsString()
  @IsOptional()
  numberOfShifts?: string;

  @IsString()
  @IsOptional()
  bleedingTime?: string;

  @IsString()
  @IsOptional()
  followingScaldingSystem?: string;

  @IsString()
  @IsOptional()
  product?: string;

  @IsString()
  @IsOptional()
  electrical?: string;

  @IsString()
  @IsOptional()
  electricalConsumption?: string;

  @IsString()
  @IsOptional()
  waterConsumption?: string;

  @IsString()
  @IsOptional()
  iceConsumption?: string;

  @IsNotEmpty()
  @IsMongoId()
  productCategory: string;
}
