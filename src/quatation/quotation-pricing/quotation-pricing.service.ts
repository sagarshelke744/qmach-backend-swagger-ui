import { QuotationPricing } from './../schema/quotation-pricing.schema';
import { QuotationPricingDto } from './../dto/create-quotation-pricing.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class QuotationPricingService {
  constructor(
    @InjectModel(QuotationPricing.name)
    private readonly quotationPricingModel: Model<QuotationPricing>,
  ) {}

  async create(
    quotationPricingDto: QuotationPricingDto,
  ): Promise<QuotationPricing> {
    const createdQuotationPricing = new this.quotationPricingModel(
      quotationPricingDto,
    );
    return createdQuotationPricing.save();
  }

  async findAll(): Promise<QuotationPricing[]> {
    return this.quotationPricingModel.find().exec();
  }

  async findById(id: string): Promise<QuotationPricing> {
    return this.quotationPricingModel.findById(id).exec();
  }

  async update(
    id: string,
    quotationPricingDto: QuotationPricingDto,
  ): Promise<QuotationPricing> {
    return this.quotationPricingModel
      .findByIdAndUpdate(id, quotationPricingDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<QuotationPricing> {
    return this.quotationPricingModel.findByIdAndDelete(id).exec();
  }
}
