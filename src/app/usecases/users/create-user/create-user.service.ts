import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from '@app/interfaces/user.dto';
import { PrismaService } from '@shared/services/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}

  async execute({ nickname, password }: UserDTO) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        nickname: nickname,
      },
    });

    if (userAlreadyExists) {
      throw new HttpException(
        'nickname already in use',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.prisma.user.create({
      data: {
        nickname,
        password,
      },
    });

    return user;
  }
}
