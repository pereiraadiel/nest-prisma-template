import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from '@app/interfaces/user.dto';
import { CreateUserService } from '@app/usecases/users/create-user/create-user.service';

@Controller('users')
export class CreateUserController {
  constructor(private service: CreateUserService) {}

  @Post()
  async handle(@Body() dto: UserDTO) {
    return await this.service.execute(dto);
  }
}
