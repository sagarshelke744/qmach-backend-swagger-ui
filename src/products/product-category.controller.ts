import { ProductCategorySearch } from './dto/create-product.dto';
// product-type.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductTypeService } from './product-category.service';
import { CreateProductTypeDto } from './dto/create-product-category.dto';
import { UpdateProductTypeDto } from './dto/update-product-category.dto';
import { ProductCategory } from './schema/product-category.schema';

@Controller('product-category')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Post()
  async create(
    @Body() createProductTypeDto: CreateProductTypeDto,
  ): Promise<ProductCategory> {
    return this.productTypeService.create(createProductTypeDto);
  }

  @Get()
  async findAll(
    @Query('productType') productType?: string,
  ): Promise<ProductCategory[]> {
    return this.productTypeService.findAll(productType);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductCategory> {
    return this.productTypeService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductTypeDto: UpdateProductTypeDto,
  ): Promise<ProductCategory> {
    return this.productTypeService.update(id, updateProductTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ProductCategory> {
    return this.productTypeService.remove(id);
  }
}
