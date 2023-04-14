import { QuotationPricingController } from './quotation-pricing/quotation-pricing.controller';
import { QuotationPricingService } from './quotation-pricing/quotation-pricing.service';
import { QueryHelper } from './../shared/query-helper';
import {
  QuatationProductItem,
  QuatationProductItemSchema,
} from './schema/quatation-prodcut.schema';
import { QuatationProductService } from './quatation-product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QuatationService } from './quatation.service';
import { QuatationController } from './quatation.controller';
import {
  QuatationProductCatDescription,
  QuatationProductCatDescriptionSchema,
} from './schema/quatation-product-cat-desc.schema';
import { Quatation, QuatationSchema } from './schema/quatation.schema';
import {
  QuotationPricing,
  QuotationPricingSchema,
} from './schema/quotation-pricing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QuatationProductCatDescription.name,
        schema: QuatationProductCatDescriptionSchema,
      },
      {
        name: Quatation.name,
        schema: QuatationSchema,
      },
      {
        name: QuatationProductItem.name,
        schema: QuatationProductItemSchema,
      },
      {
        name: QuotationPricing.name,
        schema: QuotationPricingSchema,
      },
    ]),
  ],
  controllers: [QuatationController, QuotationPricingController],
  providers: [
    QuatationService,
    QuatationProductService,
    QuotationPricingService,
    QueryHelper,
  ],
})
export class QuatationModule {}
