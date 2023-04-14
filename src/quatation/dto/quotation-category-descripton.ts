import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

export class QuatationProductCatDescriptionDTO {
  @IsNotEmpty()
  productCategoryDescription: ObjectId;

  @IsString()
  @IsOptional()
  suitableForProcessing: string;

  @IsString()
  @IsOptional()
  averageLiveWeight: string;

  @IsString()
  @IsOptional()
  minimumWeight: string;

  @IsString()
  @IsOptional()
  maximumWeight: string;

  @IsString()
  @IsOptional()
  capacity: string;

  @IsString()
  @IsOptional()
  numberOfShifts: string;

  @IsString()
  @IsOptional()
  bleedingTime: string;

  @IsString()
  @IsOptional()
  followingScaldingSystem: string;

  @IsString()
  @IsOptional()
  product: string;

  @IsString()
  @IsOptional()
  electrical: string;

  @IsString()
  @IsOptional()
  electricalConsumption: string;

  @IsString()
  @IsOptional()
  waterConsumption: string;

  @IsString()
  @IsOptional()
  iceConsumption: string;

  @IsNotEmpty()
  productCategory: ObjectId;
}
