import { UsersModule } from './user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
