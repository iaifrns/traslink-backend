import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUser } from './dto/createUser';
import { Login } from './dto/login';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getAllUsers() {
    return this.userRepo.find();
  }

  getUserById(id: number) {
    return this.userRepo.findBy({ id: id });
  }

  async checkIfUserExist(credentials: Login) {
    const user = await this.userRepo.findOneBy({
      username: credentials.username,
      password: credentials.password,
    });
    return user;
  }

  create(createUser: CreateUser) {
    const user = this.userRepo.create(createUser);
    const response = this.userRepo.save(user);
    return response;
  }

  update(user: User) {
    return this.userRepo.save(user);
  }
}
