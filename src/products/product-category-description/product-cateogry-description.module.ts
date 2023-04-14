import {
  ProductCategoryDescription,
  ProductCategoryDescriptionSchema,
} from './schema/product-category-schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategoryDescriptionController } from './product-category-description.controller';
import { ProductCategoryDescriptionService } from './product-category-description.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProductCategoryDescription.name,
        schema: ProductCategoryDescriptionSchema,
      },
    ]),
  ],
  controllers: [ProductCategoryDescriptionController],
  providers: [ProductCategoryDescriptionService],
})
export class ProductCategoryDescriptionModule {}
