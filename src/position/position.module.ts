import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Positions } from './entities/position.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Positions])],
  controllers: [PositionController],
  providers: [PositionService]
})
export class PositionModule {}
