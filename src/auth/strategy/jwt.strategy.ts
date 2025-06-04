import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Reads token from "Authorization: Bearer <token>"
      ignoreExpiration: false, // Token must be valid
      secretOrKey: 'jwt-secret-key', // 🔐 Move to .env in production!
    });
  }

  async validate(payload: any) {
    // This content is attached to req.user
    return { userId: payload.sub, username: payload.username };
  }
}
