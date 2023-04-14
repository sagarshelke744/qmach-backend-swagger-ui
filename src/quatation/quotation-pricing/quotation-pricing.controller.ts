import { QuotationPricingService } from './quotation-pricing.service';
import { QuotationPricing } from './../schema/quotation-pricing.schema';
import { QuotationPricingDto } from './../dto/create-quotation-pricing.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
@Controller('quotation-pricing')
export class QuotationPricingController {
  constructor(
    private readonly quotationPricingService: QuotationPricingService,
  ) {}

  @Post()
  async create(
    @Body() quotationPricingDto: QuotationPricingDto,
  ): Promise<QuotationPricing> {
    return this.quotationPricingService.create(quotationPricingDto);
  }

  @Get()
  async findAll(): Promise<QuotationPricing[]> {
    return this.quotationPricingService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<QuotationPricing> {
    return this.quotationPricingService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() quotationPricingDto: QuotationPricingDto,
  ): Promise<QuotationPricing> {
    return this.quotationPricingService.update(id, quotationPricingDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<QuotationPricing> {
    return this.quotationPricingService.delete(id);
  }
}
