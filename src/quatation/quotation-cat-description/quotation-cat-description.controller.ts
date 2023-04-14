import { QuatationProductCatDescriptionService } from './quotation-cat-description.service';
import { QuatationProductCatDescriptionDTO } from './../dto/quotation-category-descripton';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('quatation-product-cat-descriptions')
export class QuatationProductCatDescriptionController {
  constructor(
    private readonly quatationProductCatDescriptionService: QuatationProductCatDescriptionService,
  ) {}

  @Post()
  async create(
    @Body()
    quatationProductCatDescriptionDTO: QuatationProductCatDescriptionDTO,
  ) {
    return this.quatationProductCatDescriptionService.create(
      quatationProductCatDescriptionDTO,
    );
  }

  @Get()
  async findAll() {
    return this.quatationProductCatDescriptionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.quatationProductCatDescriptionService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    quatationProductCatDescriptionDTO: QuatationProductCatDescriptionDTO,
  ) {
    return this.quatationProductCatDescriptionService.update(
      id,
      quatationProductCatDescriptionDTO,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.quatationProductCatDescriptionService.remove(id);
  }
}
