/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateTimerDto } from './dto/create-timer.dto';
import { UpdateTimerDto } from './dto/update-timer.dto';
import { TimersService } from './timers.service';
import { Timer } from './timer.entity';

@Controller('timers')
export class TimersController {
  constructor(private readonly timersService: TimersService) {}

  @Post()
  create(@Body() createTimerDto: CreateTimerDto): Promise<Timer> {
    return this.timersService.create(createTimerDto);
  }

  @Get()
  findAll(): Promise<Timer[]> {
    return this.timersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Timer> {
    return this.timersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTimerDto: UpdateTimerDto): Promise<Timer> {
    return this.timersService.update(id, updateTimerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.timersService.remove(id);
  }
}