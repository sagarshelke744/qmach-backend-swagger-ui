import { QuotationPricingService } from './quotation-pricing/quotation-pricing.service';
import { QueryHelper } from './../shared/query-helper';
import { QuatationProductService } from './quatation-product.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Quatation, QuatationDocument } from './schema/quatation.schema';
import {
  CreateQuatationDto,
  QuatationSearch,
} from './dto/create-quatation.dto';
import { UpdateQuatationDto } from './dto/update-quatation.dto';

@Injectable()
export class QuatationService {
  constructor(
    @InjectModel(Quatation.name)
    private readonly quatationModel: Model<QuatationDocument>,
    private readonly quatationProduct: QuatationProductService,
    private readonly quatationPricingService: QuotationPricingService,
    private readonly queryHelper: QueryHelper,
  ) {}

  async create(createQuatationDto: CreateQuatationDto): Promise<Quatation> {
    const quatationItem = [];
    const quatationProducts =
      (await this.quatationProduct.createMultipleQuatation(
        createQuatationDto.quatationProduct,
      )) as any[];
    quatationProducts.map((item) => quatationItem.push(item._id));
    createQuatationDto.quatationProduct = quatationItem;

    const quotationPricing = (await this.quatationPricingService.create(
      createQuatationDto.quotationPricingData,
    )) as any;
    createQuatationDto.quotationPricing = quotationPricing._id;
    const createdQuatation = new this.quatationModel(createQuatationDto);
    return createdQuatation.save();
  }

  async findAll(search: QuatationSearch): Promise<Quatation[]> {
    let match = {};
    let groupBy = [
      {
        $group: {
          _id: '$_id',
          quotations: { $push: '$$ROOT' },
          client: { $first: '$client' },
        },
      },
    ];
    if (search && search.id) {
      match = { _id: new mongoose.Types.ObjectId(search.id) };
      groupBy = this.getQuatationProductQuery();
    }
    const query = [
      {
        $match: match,
      },
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
        $lookup: {
          from: 'clients',
          foreignField: '_id',
          localField: 'client',
          as: 'client',
        },
      },
      { $unwind: { path: '$client', preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: 'productcategorydescriptions',
          foreignField: '_id',
          localField: 'quatationProductCatDesc',
          as: 'quatationProductCatDesc',
        },
      },
      {
        $unwind: {
          path: '$quatationProductCatDesc',
          preserveNullAndEmptyArrays: true,
        },
      },


      {
        $lookup: {
          from: 'quotationpricings',
          foreignField: '_id',
          localField: 'quotationPricing',
          as: 'quotationPricing',
        },
      },
      {
        $unwind: {
          path: '$quotationPricing',
          preserveNullAndEmptyArrays: true,
        },
      },

      {
        $lookup: {
          from: 'quatationproductitems',
          foreignField: '_id',
          localField: 'quatationProduct',
          as: 'quatationProduct',
        },
      },
      {
        $unwind: {
          path: '$quatationProduct',
          preserveNullAndEmptyArrays: true,
        },
      },
    ];
    const getData = await this.queryHelper.aggregationHelper(
      this.quatationModel,
      [...query, ...groupBy],
    );
    return getData;
    // return this.quatationModel.find().exec();
  }

  async findOne(id: string): Promise<Quatation> {
    return this.quatationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateQuatationDto: UpdateQuatationDto,
  ): Promise<Quatation> {
    return this.quatationModel
      .findByIdAndUpdate(id, updateQuatationDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Quatation> {
    return await this.quatationModel.findByIdAndDelete(id).exec();
  }

  getQuatationProductQuery(): any {
    const groupBy = [
      {
        $group: {
          quatationId: { $first: '$_id' },
          _id: {
            category: '$productCategory.productType',
            subCategory: '$productCategory.productSubType',
            processArea: '$quatationProduct.processingArea',
          },
          products: { $push: '$quatationProduct' },
          category: { $first: '$productCategory' },
          client: { $first: '$client' },
          quatationProductCatDesc: { $first: '$quatationProductCatDesc' },
          quotationPricing: { $first: '$quotationPricing' },

        },
      },
    ];

    return groupBy;
  }
}
