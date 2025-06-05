import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { EnterprisesModule } from 'src/enterprises/enterprises.module';
import { PositionModule } from 'src/position/position.module';

@Module({
  imports:[TypeOrmModule.forFeature([Users]), EnterprisesModule, PositionModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
