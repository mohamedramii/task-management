/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Timer extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  duration: number;

  @Prop()
  description: string;
}

export const TimerSchema = SchemaFactory.createForClass(Timer);