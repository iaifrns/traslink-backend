import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/createUser';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    findUserByUsername(username: string){
        return this.userRepo.findOneBy({username})
    }

    async createUser(createUser: CreateUser){
        const password = await bcrypt.hash(createUser.password, 10)
        const newUser = this.userRepo.create({...createUser, password: password})
        return this.userRepo.save(newUser)
    }
}
