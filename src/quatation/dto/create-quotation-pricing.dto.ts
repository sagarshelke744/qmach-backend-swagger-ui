import { IsNumber, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QuotationPricingDto {
  @ApiProperty({ example: 1000 })
  @IsNotEmpty()
  @IsNumber()
  total1: number;

  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @IsNumber()
  disc: number;

  @ApiProperty({ example: 900 })
  @IsNotEmpty()
  @IsNumber()
  total2: number;

  @ApiProperty({ example: 50 })
  @IsNotEmpty()
  @IsNumber()
  packing: number;

  @ApiProperty({ example: 950 })
  @IsNotEmpty()
  @IsNumber()
  total3: number;

  @ApiProperty({ example: 25 })
  @IsNotEmpty()
  @IsNumber()
  insurance: number;

  @ApiProperty({ example: 975 })
  @IsNotEmpty()
  @IsNumber()
  total4: number;

  @ApiProperty({ example: 75 })
  @IsNotEmpty()
  @IsNumber()
  installation: number;
  @ApiProperty({ example: 975 })
  @IsNotEmpty()
  @IsNumber()
  total5: number;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  @IsNumber()
  cgst: number;

  @ApiProperty({ example: 1025 })
  @IsNotEmpty()
  @IsNumber()
  total6: number;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  @IsNumber()
  sgst: number;

  @ApiProperty({ example: 1035 })
  @IsNotEmpty()
  @IsNumber()
  total7: number;

  @ApiProperty({ example: 0 })
  @IsNotEmpty()
  @IsNumber()
  igst: number;

  @ApiProperty({ example: 1035 })
  @IsNotEmpty()
  @IsNumber()
  total8: number;

  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @IsNumber()
  transport: number;

  @ApiProperty({ example: 1035 })
  @IsNotEmpty()
  @IsNumber()
  total9: number;

  @ApiProperty({ example: 935 })
  @IsNotEmpty()
  @IsNumber()
  roff: number;

  @IsString()
  @IsOptional()
  quatation: string;
}
