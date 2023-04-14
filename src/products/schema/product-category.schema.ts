import { ProductModuleEnum, ProcessingArea } from './../constant';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ProductCategoryDocument = ProductCategory & Document;

@Schema()
export class ProductCategory {
  @Prop({ required: true, enum: Object.values(ProductModuleEnum) })
  productType: string;

  @Prop({ default: null })
  productSubType: string;

  @Prop()
  name: string;

  @Prop({ default: null })
  processingArea: ProcessingArea;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);
