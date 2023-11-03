import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { jwtConstants } from './constants';
import { UserModule } from '../managers/user/user.module';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            // 方便调试，增加时间
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthenticationService],
    controllers: [AuthenticationController],
})
export class AuthenticationModule {}
