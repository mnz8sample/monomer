import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './managers/user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';

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
        UserModule,
        AuthenticationModule,
        AuthorizationModule,
    ],
})
export class AppModule {}
