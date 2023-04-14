import { ProductCategoryDescription } from './schema/product-category-schema';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ProductCategoryDescriptionService } from './product-category-description.service';
import { CreateProductCategoryDescriptionDto } from './dto/create-product-category-description.dto';
import { UpdateProductCategoryDescriptionDto } from './dto/update-product-category-description.dto';

@Controller('product-category-description')
export class ProductCategoryDescriptionController {
  constructor(
    private readonly productCategoryDescriptionService: ProductCategoryDescriptionService,
  ) {}

  @Post()
  async create(
    @Body()
    createProductCategoryDescriptionDto: CreateProductCategoryDescriptionDto,
  ): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionService.create(
      createProductCategoryDescriptionDto,
    );
  }

  @Get('by-category')
  async findById(
    @Query('productCategory') productCategory: string,
  ): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionService.findById(productCategory);
  }

  @Get()
  async findAll(
  
  ): Promise<ProductCategoryDescription[]> {
    return this.productCategoryDescriptionService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    updateProductCategoryDescriptionDto: UpdateProductCategoryDescriptionDto,
  ): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionService.update(
      id,
      updateProductCategoryDescriptionDto,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionService.delete(id);
  }
}
