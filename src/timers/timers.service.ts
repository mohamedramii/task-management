/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timer } from './timer.entity';
import { CreateTimerDto } from './dto/create-timer.dto';
import { UpdateTimerDto } from './dto/update-timer.dto';

@Injectable()
export class TimersService {
  constructor(@InjectModel(Timer.name) private timerModel: Model<Timer>) {}

  async create(createTimerDto: CreateTimerDto): Promise<Timer> {
    const createdTimer = new this.timerModel(createTimerDto);
    return createdTimer.save();
  }

  async findAll(): Promise<Timer[]> {
    return this.timerModel.find().exec();
  }

  async findOne(id: string): Promise<Timer> {
    return this.timerModel.findById(id).exec();
  }

  async update(id: string, updateTimerDto: UpdateTimerDto): Promise<Timer> {
    return this.timerModel.findByIdAndUpdate(id, updateTimerDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.timerModel.findByIdAndRemove(id).exec();
  }
}