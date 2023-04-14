import { QueryHelper } from './../shared/query-helper';
import { ProductTypeService } from './product-category.service';
import { ProductTypeController } from './product-category.controller';
import { ProductCategorySchema } from './schema/product-category.schema';
import { ProductCategory } from './schema/product-category.schema';
import { ProductController } from './products.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductCategory.name, schema: ProductCategorySchema },
    ]),
  ],
  controllers: [ProductController, ProductTypeController],
  providers: [ProductService, ProductTypeService, QueryHelper],
})
export class ProductModule {}
