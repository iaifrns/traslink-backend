import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprises/entities/enterprise.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Users } from './users/entities/user.entity';
import { PositionModule } from './position/position.module';
import { Positions } from './position/entities/position.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'translink',
    synchronize: true,
    host: 'localhost',
    entities: [Enterprise, Users, Positions]
  }),EnterprisesModule, UsersModule, AuthModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
