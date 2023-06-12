import { Controller, Body, Post, HttpCode, HttpStatus, Get, Request } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserDto } from '../managers/user/user.dto';

@Controller('ac')
export class AuthenticationController {
    constructor(private AuthenticationService: AuthenticationService) {}

    @HttpCode(HttpStatus.OK)
    @Post('sign-up')
    // 理想情况 使用 DTO 类来定义请求主体
    sign_up(@Body() signUpDto: UserDto) {
        return this.AuthenticationService.signUp(signUpDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    // 理想情况 使用 DTO 类来定义请求主体
    sign_in(@Body() signInDto: UserDto) {
        return this.AuthenticationService.signIn(signInDto.account, signInDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-out')
    sign_out(@Body() signOutDto: UserDto) {
        // todo
    }
}
