/* eslint-disable prettier/prettier */


   import { Module } from '@nestjs/common';
   import { MongooseModule } from '@nestjs/mongoose';
   import { TasksModule } from './tasks/tasks.module';
   import { TimersModule } from './timers/timers.module';
   import { UsersModule } from './users/users.module';

   @Module({
     imports: [
      MongooseModule.forRoot('mongodb+srv://moramy:rrOjUOHIrevUwDgK@cluster0.jhlxrv2.mongodb.net/?retryWrites=true&w=majority'),
       TasksModule,
       TimersModule,
       UsersModule,
     ],
   })
   export class AppModule {}
