import { ProductCategoryDescription } from './schema/product-category-schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductCategoryDescriptionDto } from './dto/create-product-category-description.dto';
import { UpdateProductCategoryDescriptionDto } from './dto/update-product-category-description.dto';

@Injectable()
export class ProductCategoryDescriptionService {
  constructor(
    @InjectModel(ProductCategoryDescription.name)
    private readonly productCategoryDescriptionModel: Model<ProductCategoryDescription>,
  ) {}

  async create(
    createProductCategoryDescriptionDto: CreateProductCategoryDescriptionDto,
  ): Promise<ProductCategoryDescription> {
    const createdProductCategoryDescription =
      new this.productCategoryDescriptionModel(
        createProductCategoryDescriptionDto,
      );
    return createdProductCategoryDescription.save();
  }

  async findAll(): Promise<ProductCategoryDescription[]> {
    return this.productCategoryDescriptionModel
      .find()
      .populate('productCategory')
      .exec();
  }

  async findById(productCategory: string): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionModel
      .findOne({ productCategory })
      .populate('productCategory')
      .exec();
  }

  async update(
    id: string,
    updateProductCategoryDescriptionDto: UpdateProductCategoryDescriptionDto,
  ): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionModel.findByIdAndUpdate(
      id,
      updateProductCategoryDescriptionDto,
      {
        new: true,
      },
    );
  }

  async delete(id: string): Promise<ProductCategoryDescription> {
    return this.productCategoryDescriptionModel.findByIdAndDelete(id);
  }
}
