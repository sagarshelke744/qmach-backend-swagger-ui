import { QuotationPricingDto } from './../dto/create-quotation-pricing.dto';
import { Summary } from './../dto/create-quatation.dto';
import { QuatationProductItem } from './quatation-prodcut.schema';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema()
export class Quatation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' })
  productCategory: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategoryDescription',
  })
  productCategoryDescription: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuatationProductCatDescription',
  })
  quatationProductCatDesc: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'QuatationProductItem' },
    ],
  })
  quatationProduct: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
  client: mongoose.Schema.Types.ObjectId;


  @Prop({default: []})
  summary: Summary[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuotationPricing',
  })
  quotationPricing: mongoose.Schema.Types.ObjectId;

}

export type QuatationDocument = Quatation & Document;
export const QuatationSchema = SchemaFactory.createForClass(Quatation);
