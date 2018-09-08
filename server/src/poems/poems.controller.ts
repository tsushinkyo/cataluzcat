import { Controller, Get } from '@nestjs/common';

@Controller('poems')
export class PoemsController {
    @Get()
    getCategories(){
      return [{
              title: 'poema1',
              poemTxt: 'textoDelPoema',
              image: 'imageSrc',
          }];
    }
}
