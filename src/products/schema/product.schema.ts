import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, default: '' })
  title: string;

  @Prop({ required: true, default: [] })
  descriptions: [
    {
      description: string;
    },
  ];

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ default: 0 })
  quantity: number;

  @Prop({ default: 0 })
  total: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' })
  productCategory: mongoose.Schema.Types.ObjectId;

  @Prop({  default: null })
  processingArea: string;

  @Prop({ default: '' })
  note: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
