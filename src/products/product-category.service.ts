import { QueryHelper } from './../shared/query-helper';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductCategory,
  ProductCategoryDocument,
} from './schema/product-category.schema';
import { CreateProductTypeDto } from './dto/create-product-category.dto';
import { UpdateProductTypeDto } from './dto/update-product-category.dto';
import { ProductCategorySearch } from './dto/create-product.dto';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectModel(ProductCategory.name)
    private readonly productTypeModel: Model<ProductCategoryDocument>,
    private readonly queryHelper: QueryHelper,
  ) {}

  async create(
    createProductTypeDto: CreateProductTypeDto,
  ): Promise<ProductCategory> {
    const createdProductType = new this.productTypeModel(createProductTypeDto);
    return createdProductType.save();
  }

  async findAll(productType: string): Promise<ProductCategory[]> {
    // return this.productTypeModel.find().exec();
    let matchObj = {};
    matchObj = productType && productType
      ? { ...matchObj, productType: productType }
      : matchObj;
    const query = [{ $match: matchObj }];

    const data = await this.queryHelper.aggregationHelper(
      this.productTypeModel,
      query,
    );
    return data;
  }

  async findOne(id: string): Promise<ProductCategory> {
    return this.productTypeModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProductTypeDto: UpdateProductTypeDto,
  ): Promise<ProductCategory> {
    return this.productTypeModel
      .findByIdAndUpdate(id, updateProductTypeDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ProductCategory> {
    return this.productTypeModel.findByIdAndRemove(id).exec();
  }
}
