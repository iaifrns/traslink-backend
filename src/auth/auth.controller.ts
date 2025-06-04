import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() data: { username: string; password: string }) {
    const user = await this.authService.validateUser(data);
    if (user) {
      const token = this.authService.login(user);
      return { ...user, ...token };
    }

    return null;
  }
}
