import { QuatationProductCatDescriptionDTO } from '../dto/quotation-category-descripton';
import {
  QuatationProductCatDescription,
  QuatationProductCatDescriptionDocument,
} from '../schema/quatation-product-cat-desc.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuatationProductCatDescriptionService {
  constructor(
    @InjectModel(QuatationProductCatDescription.name)
    private readonly quatationProductCatDescriptionModel: Model<QuatationProductCatDescriptionDocument>,
  ) {}

  async create(
    quatationProductCatDescriptionDTO: QuatationProductCatDescriptionDTO,
  ): Promise<QuatationProductCatDescription> {
    const createdQuatationProductCatDescription =
      new this.quatationProductCatDescriptionModel(
        quatationProductCatDescriptionDTO,
      );
    return createdQuatationProductCatDescription.save();
  }

  async findAll(): Promise<QuatationProductCatDescription[]> {
    return this.quatationProductCatDescriptionModel.find().exec();
  }

  async findOne(id: string): Promise<QuatationProductCatDescription> {
    return this.quatationProductCatDescriptionModel.findById(id).exec();
  }

  async update(
    id: string,
    quatationProductCatDescriptionDTO: QuatationProductCatDescriptionDTO,
  ): Promise<QuatationProductCatDescription> {
    return this.quatationProductCatDescriptionModel
      .findByIdAndUpdate(id, quatationProductCatDescriptionDTO, { new: true })
      .exec();
  }

  async remove(id: string): Promise<QuatationProductCatDescription> {
    return this.quatationProductCatDescriptionModel
      .findByIdAndRemove(id)
      .exec();
  }
}
