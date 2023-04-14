import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type QuatationProductItemDocument = QuatationProductItem & Document;

@Schema()
export class QuatationProductItem {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  })
  product: mongoose.Schema.Types.ObjectId;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  advanceAmount: number;

  @Prop()
  total: number;

  @Prop()
  title: string;

  @Prop({ default: [] })
  descriptions: [
    {
      description: string;
    },
  ];

  @Prop({ default: null })
  processingArea: string;

  @Prop({ default: '' })
  note: string;

}

export const QuatationProductItemSchema =
  SchemaFactory.createForClass(QuatationProductItem);
