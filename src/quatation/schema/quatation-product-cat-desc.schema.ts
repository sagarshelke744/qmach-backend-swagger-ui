import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema()
export class QuatationProductCatDescription {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategoryDescription',
  })
  productCategoryDescription: mongoose.Schema.Types.ObjectId;

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

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
  })
  productCategory: mongoose.Schema.Types.ObjectId;
}

export type QuatationProductCatDescriptionDocument =
  QuatationProductCatDescription & Document;
export const QuatationProductCatDescriptionSchema =
  SchemaFactory.createForClass(QuatationProductCatDescription);
