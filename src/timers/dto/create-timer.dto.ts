/* eslint-disable prettier/prettier */

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTimerDto {
  @IsString()
  title: string;

  @IsNumber()
  duration: number;

  @IsOptional()
  @IsString()
  description?: string;
}
