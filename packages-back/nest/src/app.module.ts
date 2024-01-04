import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountMonomerModule } from './account-monomer/account-monomer.module';
import { IdentifyMonomerModule } from './identify-monomer/identify-monomer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql-user',
      password: 'mysql-password',
      database: 'mysql-db',
      entities: ['dist/**/*.entity.js'],
      logging: true,
    }),
    AccountMonomerModule,
    IdentifyMonomerModule,
  ],
  controllers: [],
})
export class AppModule {}
