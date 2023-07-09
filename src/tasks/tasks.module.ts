/* eslint-disable prettier/prettier */
import { MongooseModule } from "@nestjs/mongoose";
import { Task, TaskSchema } from "./task.entity";
import { TasksController } from "./tasks.controller";
import { Module } from '@nestjs/common';
import { TasksService } from "./tasks.service";
@Module({
    imports: [
      MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]), 
    ],
    controllers: [TasksController],
    providers: [TasksService],
  })
  export class TasksModule {}
  