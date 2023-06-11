import { Controller, Body, Post, HttpCode, HttpStatus, Get, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './authentication.guard';

@Controller('ac')
export class AuthenticationController {
    constructor(private AuthenticationService: AuthenticationService) {}
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    // 理想情况 使用 DTO 类来定义请求主体
    signIn(@Body() signInDto: Record<string, any>) {
        return this.AuthenticationService.signIn(signInDto.account, signInDto.password);
    }

    @UseGuards(AuthenticationGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
