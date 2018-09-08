import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { PoemsController } from './poems/poems.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, PoemsController],
  providers: [AppService],
})
export class AppModule {}
