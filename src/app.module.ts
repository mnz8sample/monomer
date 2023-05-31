import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PokemonModule } from './managers/pokemon/pokemon.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: 'localhost',
        //     port: 5432,
        //     username: 'postgres-user',
        //     password: 'postgres-password',
        //     database: 'postgres-db',
        //     entities: ['dist/**/*.entity.js'],
        //     synchronize: true,
        //     logging: true,
        // }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'mysql-user',
            password: 'mysql-password',
            database: 'mysql-db',
            entities: ['dist/**/*.entity.js'],
            // 数据初始时打开，有数据就可以关闭了
            // synchronize: true,
            logging: true,
        }),
        PokemonModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
