import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PositionService } from './position.service';
import { Positions } from './entities/position.entity';

@Controller('position')
export class PositionController {
    constructor(private positionService: PositionService){}

    @Get()
    findAll(){
        return this.positionService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.positionService.findOne(+id)
    }

    @Post()
    create(@Body() data:{position: string}){
        this.positionService.create(data.position)
    }

    @Put('update')
    update(@Body() data: Positions){
        this.positionService.update(data)
    }

}
