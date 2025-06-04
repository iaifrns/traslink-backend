import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() inputs: { username: string; password: string }) {
    const response = await this.authService.validateUser(inputs);
    if (response.data) {
      const token = this.authService.login(response.data);
      return {
        data: { ...response.data, ...token },
      };
    }

    return response;
  }
}
