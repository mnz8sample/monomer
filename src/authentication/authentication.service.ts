import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../managers/user/user.service';
import { UserDto } from '../managers/user/user.dto';

@Injectable()
export class AuthenticationService {
    constructor(private UserService: UserService, private jwtService: JwtService) {}

    signUp(params: UserDto) {
        return this.UserService.create(params);
    }

    async signIn(account, password) {
        if (!account) {
            throw new UnauthorizedException();
        }

        const user = await this.UserService.detail(account);

        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, account: user.account };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
