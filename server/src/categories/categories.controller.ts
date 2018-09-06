import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get()
    getCategories(){
      return {
          message: 'In a real example, I would return all of the messages'
      };
    }
}
