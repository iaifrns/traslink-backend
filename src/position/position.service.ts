import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Positions } from './entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
    constructor(@InjectRepository(Positions) private positionRepo: Repository<Positions>){}

    findAll(){
        return this.positionRepo.find()
    }

    findOne(id:number){
        return this.positionRepo.findOneBy({id})
    }

    create(position:string){
        const newPosition = this.positionRepo.create({position})
        this.positionRepo.save(newPosition)
    }

    update(position:Positions){
        this.positionRepo.save(position)
    }

}
