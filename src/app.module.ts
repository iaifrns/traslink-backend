import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprises/entities/enterprise.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'translink',
    synchronize: true,
    host: 'localhost',
    entities: [Enterprise]
  }),EnterprisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
