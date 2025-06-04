import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { ApiResponse } from 'src/dto/Response';
import { UserDto } from 'src/users/dto/UserReturn';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService : UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(inputs : {username: string, password: string}):Promise<ApiResponse<null | UserDto>>{
        const user = await this.userService.findUserByUsername(inputs.username)

        if(user && await bcrypt.compare(inputs.password, user.password)){
            const {password, ...result} = user
            return {
                data: result,
            }
        }

        return {
            data: null,
            message: "check you credentials"
        }
    }

    login(user:UserDto){
        const payload = {username: user.username, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
