import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/createUser';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUser: CreateUser) {
    return this.usersService.create(createUser);
  }
}
