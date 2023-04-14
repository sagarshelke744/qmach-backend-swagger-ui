import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCategoryDescriptionDto } from './create-product-category-description.dto';

export class UpdateProductCategoryDescriptionDto extends PartialType(
  CreateProductCategoryDescriptionDto,
) {}
