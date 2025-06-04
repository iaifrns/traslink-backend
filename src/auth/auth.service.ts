import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { UserDto } from 'src/users/dto/userDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async validateUser(data: {username: string, password: string}){
        const user = await this.userService.findOneByUsername(data.username)
        if(user && await bcrypt.compare(data.password, user.password)){
            const {password, ...result} = user
            return result
        }

        return null;
    }

    login(user: UserDto){
        const payload = {username: user.username, sub: user.id}
        const token = this.jwtService.sign(payload)

        return {
            access_toke: token
        }
    }
}
