import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTypeDto } from './create-product-category.dto';

export class UpdateProductTypeDto extends PartialType(CreateProductTypeDto) {}
