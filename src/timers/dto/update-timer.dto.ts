/* eslint-disable prettier/prettier */

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateTimerDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
