import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUser } from './dto/createUser';
import { Login } from './dto/login';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    findUserById(@Param('id') id: number):Promise<User[]>{
        return this.usersService.getUserById(id)
    }

    @Post('user_exist')
    CheckIfUserExist(@Body() cridentials:Login):Promise<User | null>{
        return this.usersService.checkIfUserExist(cridentials)
    }

    @Post()
    create(@Body() createUser: CreateUser):Promise<User>{
        return this.usersService.create(createUser)
    }

    @Post('update')
    update(@Body() user: User):Promise<User>{
        return this.usersService.update(user)
    }

}
