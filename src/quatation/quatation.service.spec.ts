import { Test, TestingModule } from '@nestjs/testing';
import { QuatationService } from './quatation.service';

describe('QuatationService', () => {
  let service: QuatationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuatationService],
    }).compile();

    service = module.get<QuatationService>(QuatationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
