import { QuatationProductItem } from './schema/quatation-prodcut.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuatationProductItemDto } from './dto/create-quatation-product-item.dto';

@Injectable()
export class QuatationProductService {
  constructor(
    @InjectModel(QuatationProductItem.name)
    private quatationProductItemModel: Model<QuatationProductItem>,
  ) {}

  async create(
    quatationProductItemDto: CreateQuatationProductItemDto,
  ): Promise<QuatationProductItem> {
    const createdQuatationProductItem = new this.quatationProductItemModel(
      quatationProductItemDto,
    );
    return createdQuatationProductItem.save();
  }

  async findAll(): Promise<QuatationProductItem[]> {
    return this.quatationProductItemModel.find().exec();
  }

  async findOne(id: string): Promise<QuatationProductItem> {
    return this.quatationProductItemModel.findById(id).exec();
  }

  async update(
    id: string,
    quatationProductItemDto: CreateQuatationProductItemDto,
  ): Promise<QuatationProductItem> {
    return this.quatationProductItemModel
      .findByIdAndUpdate(id, quatationProductItemDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<QuatationProductItem> {
    return this.quatationProductItemModel.findByIdAndDelete(id).exec();
  }

  async createMultipleQuatation(
    quatations: CreateQuatationProductItemDto[],
  ): Promise<QuatationProductItem[]> {
    const createdQuatations: QuatationProductItem[] = [];
    console.log(quatations)
    for (const quatation of quatations) {
      const createdQuatation = await this.create(quatation);
      createdQuatations.push(createdQuatation);
    }

    return createdQuatations;
  }
}
