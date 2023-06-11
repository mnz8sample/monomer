import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { jwtConstants } from './constants';
import { UserModule } from '../managers/user/user.module';
import { AuthenticationGuard } from './authentication.guard';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [
        AuthenticationService,
        {
            provide: APP_GUARD,
            useClass: AuthenticationGuard,
        },
    ],
    controllers: [AuthenticationController],
})
export class AuthenticationModule {}
