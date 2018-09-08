import { Test, TestingModule } from '@nestjs/testing';
import { PoemsController } from './poems.controller';

describe('Poems Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PoemsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PoemsController = module.get<PoemsController>(PoemsController);
    expect(controller).toBeDefined();
  });
});
