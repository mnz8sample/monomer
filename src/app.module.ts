import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './managers/user/user.module';

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
            // synchronize: true,
            logging: true,
        }),
        UserModule,
    ],
})
export class AppModule {}
