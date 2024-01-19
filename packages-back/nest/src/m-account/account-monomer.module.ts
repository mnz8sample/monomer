import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountMonomerService } from './account-monomer.service';
import { AccountMonomerController } from './account-monomer.controller';
import { AccountMonomerEntity } from './account-monomer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountMonomerEntity])],
  providers: [AccountMonomerService],
  controllers: [AccountMonomerController],
  exports: [AccountMonomerService],
})
export class AccountMonomerModule {}
