import { Test, TestingModule } from '@nestjs/testing';
import { QuatationController } from './quatation.controller';
import { QuatationService } from './quatation.service';

describe('QuatationController', () => {
  let controller: QuatationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuatationController],
      providers: [QuatationService],
    }).compile();

    controller = module.get<QuatationController>(QuatationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
