import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@shared/services/prisma.service';
import { CreateUserService } from '@app/usecases/users/create-user/create-user.service';
import { CreateUserController } from './create-user.controller';

describe('CreateUserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [PrismaService, CreateUserService],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
