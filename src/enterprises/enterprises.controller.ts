import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';
import { Enterprise } from './entities/enterprise.entity';

@Controller('enterprises')
export class EnterprisesController {
    constructor(private enterpriseService: EnterprisesService){}

    @Get()
    findAll(){
        return this.enterpriseService.findAll()
    }

    @Get(":id")
    findOne(@Param('id') id: string){
        return this.enterpriseService.findOne(+id)
    }

    @Get("code/:code")
    findOneByCode(@Param('code') code:number){
        return this.enterpriseService.findOneByCode(code)
    }

    @Post()
    create(@Body() input: {enterpriseName: string}){
        console.log(input)
        return this.enterpriseService.create(input.enterpriseName)
    }

    @Put("/update")
    update(@Body() enterprise: Enterprise){
        return this.enterpriseService.update(enterprise)
    }

}
