import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/services/prisma.service';
import { CreateUserController } from '@infra/controllers/users/create-user/create-user.controller';
import { CreateUserService } from '@app/usecases/users/create-user/create-user.service';

@Module({
  controllers: [CreateUserController],
  providers: [PrismaService, CreateUserService],
})
export class UsersModule {}
