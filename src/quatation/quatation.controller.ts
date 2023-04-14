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
import { QuatationService } from './quatation.service';
import { CreateQuatationDto, QuatationSearch } from './dto/create-quatation.dto';
import { UpdateQuatationDto } from './dto/update-quatation.dto';
import { Quatation } from './schema/quatation.schema';

@Controller('quatations')
export class QuatationController {
  constructor(private readonly quatationService: QuatationService) {}

  @Get()
  async findAll(@Query() search: QuatationSearch): Promise<Quatation[]> {
    return this.quatationService.findAll(search);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Quatation> {
    return this.quatationService.findOne(id);
  }

  @Post()
  async create(
    @Body() createQuatationDto: CreateQuatationDto,
  ): Promise<Quatation> {
    return this.quatationService.create(createQuatationDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuatationDto: UpdateQuatationDto,
  ): Promise<Quatation> {
    return this.quatationService.update(id, updateQuatationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Quatation> {
    return this.quatationService.remove(id);
  }
}
