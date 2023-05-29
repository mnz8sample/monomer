import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PokemonEntity])],
    providers: [PokemonResolver, PokemonService],
})
export class PokemonModule {}
