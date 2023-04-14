import { PartialType } from '@nestjs/mapped-types';
import { CreateQuatationDto } from './create-quatation.dto';

export class UpdateQuatationDto extends PartialType(CreateQuatationDto) {}
