import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountMonomerModule } from './m-account/account-monomer.module';
import { IdentifyMonomerModule } from './m-identify/identify.module';
import { ProductModule } from './m-product/product.module';

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
    ProductModule,
  ],
  controllers: [],
})
export class AppModule {}
