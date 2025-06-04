import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/createUser';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  findOneByUsername(username: string) {
    return this.userRepo.findOneBy({ username });
  }

  async create(createUser: CreateUser) {
    const hash = await bcrypt.hash(createUser.password, 10);
    const user = { ...createUser, password: hash };

    const newUser = this.userRepo.create(user);
    const { password, ...result } = await this.userRepo.save(newUser);

    return result;
  }
}
