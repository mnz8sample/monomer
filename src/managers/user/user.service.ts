import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>) {}

    create(params: UserDto) {
        const user = new UserEntity();
        user.account = params.account;
        user.password = params.password;

        return this.UserRepository.save(user);
    }

    async update() {
        // to
    }

    async list(): Promise<UserEntity[]> {
        return await this.UserRepository.find();
    }

    async detail(account: string): Promise<UserEntity> {
        return await this.UserRepository.findOneBy({ account });
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.UserRepository.delete(id);
    }

    async deleteBatch(ids: number[]) {
        // return await this.UserRepository.
    }
}
