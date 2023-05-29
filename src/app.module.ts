import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './managers/pokemon/pokemon.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'monomer-user',
            password: 'monomer-password',
            database: 'monomer-db',
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
            logging: true,
        }),
        PokemonModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
