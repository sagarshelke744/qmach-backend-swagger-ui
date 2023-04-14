import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema()
export class QuotationPricing {
  @Prop({ required: true })
  total1: number;

  @Prop({ required: true })
  disc: number;

  @Prop({ required: true })
  total2: number;

  @Prop({ required: true })
  packing: number;

  @Prop({ required: true })
  total3: number;

  @Prop({ required: true })
  insurance: number;

  @Prop({ required: true })
  total4: number;

  @Prop({ required: true })
  installation: number;
  @Prop({ required: true })
  
  total5: number;
  @Prop({ required: true })
  cgst: number;

  @Prop({ required: true })
  total6: number;

  @Prop({ required: true })
  sgst: number;

  @Prop({ required: true })
  total7: number;

  @Prop({ required: true })
  igst: number;

  @Prop({ required: true })
  total8: number;

  @Prop({ required: true })
  transport: number;


  @Prop({ required: true })
  total9: number;

  @Prop({ required: true })
  roff: number;


}

export type QuotationPricingDocument = QuotationPricing & Document;
export const QuotationPricingSchema =
  SchemaFactory.createForClass(QuotationPricing);
