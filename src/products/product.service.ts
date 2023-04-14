import { QueryHelper } from './../shared/query-helper';
import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import {
  CreateProductDto,
  ProductCategorySearch,
} from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import mongoose from 'mongoose';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private readonly queryHelper: QueryHelper,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    createProductDto.total =
      Number(createProductDto.quantity) * Number(createProductDto.total);
    return createdProduct.save();
  }

  async findAll(@Query() search: ProductCategorySearch): Promise<Product[]> {
    let match = {};
    const { productType, productCategory } = search;
    match = productType
      ? { 'productCategory.productType': productType }
      : match;

    match = productCategory
      ? {
          ...match,
          'productCategory._id': new mongoose.Types.ObjectId(productCategory),
        }
      : match;
    let query = [
      {
        $lookup: {
          from: 'productcategories',
          foreignField: '_id',
          localField: 'productCategory',
          as: 'productCategory',
        },
      },
      {
        $unwind: { path: '$productCategory', preserveNullAndEmptyArrays: true },
      },

      {
        $match: match,
      },
    ];

    if (search.isQuatationProducts) {
      const groupBy = this.queryHelper.getQuatationProductQuery();
      query = [...query, ...groupBy];
    }
    const data = await this.queryHelper.aggregationHelper(
      this.productModel,
      query,
    );
    return data;
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).populate('productCategory').exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id);
  }

 
}
