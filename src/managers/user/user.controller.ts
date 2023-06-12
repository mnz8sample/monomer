import { Controller, Body, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { AuthenticationGuard } from '../../authentication/authentication.guard';

@UseGuards(AuthenticationGuard)
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    create(@Body() createUserDto: UserDto): Promise<UserEntity> {
        return this.userService.create(createUserDto);
    }

    @Get('list')
    list(): Promise<UserEntity[]> {
        return this.userService.list();
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
