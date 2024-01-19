import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, In } from 'typeorm';
import { AccountMonomerEntity } from './account-monomer.entity';
import { AccountMonomerDto } from './account-monomer.dto';

@Injectable()
export class AccountMonomerService {
  constructor(@InjectRepository(AccountMonomerEntity) private readonly accountRepository: Repository<AccountMonomerEntity>) {}

  create(params: AccountMonomerDto) {
    const user = new AccountMonomerEntity();
    user.account = params.account;
    user.password = params.password;

    return this.accountRepository.save(user).catch((error) => {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    });
  }

  async remove(id: number) {
    return await this.accountRepository.update(
      { id },
      {
        delete_flag: 1,
      },
    );
  }

  async update(id: number, info: AccountMonomerEntity) {
    return await this.accountRepository.update({ id }, info);
  }

  async info(id: number): Promise<AccountMonomerEntity> {
    return await this.accountRepository.findOneBy({ id });
  }

  async list(): Promise<AccountMonomerEntity[]> {
    return await this.accountRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.accountRepository.delete(id);
  }

  async removeBatch(ids: number[]) {
    return await this.accountRepository
      .createQueryBuilder()
      .update(AccountMonomerEntity)
      .set({ delete_flag: 1 })
      .where({ id: In(ids) })
      .execute();
  }

  async deleteBatch(ids: number[]) {
    return await this.accountRepository.delete(ids);
  }
}
