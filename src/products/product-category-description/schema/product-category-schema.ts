import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
const objectId = mongoose.Schema.Types.ObjectId;
@Schema()
export class ProductCategoryDescription {
  @Prop()
  suitableForProcessing: string;

  @Prop()
  averageLiveWeight: string;

  @Prop()
  minimumWeight: string;

  @Prop()
  maximumWeight: string;

  @Prop()
  capacity: string;

  @Prop()
  numberOfShifts: string;

  @Prop()
  bleedingTime: string;

  @Prop()
  followingScaldingSystem: string;

  @Prop()
  product: string;

  @Prop()
  electrical: string;

  @Prop()
  electricalConsumption: string;

  @Prop()
  waterConsumption: string;

  @Prop()
  iceConsumption: string;

  @Prop({ required: true, type: objectId, ref: 'ProductCategory' })
  productCategory: mongoose.Schema.Types.ObjectId;
}

export type ProductCategoryDescriptionDocument = ProductCategoryDescription &
  Document;
export const ProductCategoryDescriptionSchema = SchemaFactory.createForClass(
  ProductCategoryDescription,
);
