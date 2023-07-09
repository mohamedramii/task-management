/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimersController } from './timers.controller';
import { TimersService } from './timers.service';
import { Timer, TimerSchema } from './timer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Timer.name, schema: TimerSchema }])
  ],
  controllers: [TimersController],
  providers: [TimersService],
})
export class TimersModule {}