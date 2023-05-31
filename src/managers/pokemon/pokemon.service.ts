import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from './pokemon.entity';
import { CreatePokemonDto } from './create-pokemon.dto';

@Injectable()
export class PokemonService {
    constructor(@InjectRepository(PokemonEntity) private readonly PokemonRepository: Repository<PokemonEntity>) {}

    async createPokemon(data: CreatePokemonDto): Promise<PokemonEntity> {
        const pokemon = new PokemonEntity();
        pokemon.name = data.name;
        pokemon.pokedex = data.pokedex;
        pokemon.type = data.type;

        await this.PokemonRepository.save(pokemon);

        return pokemon;
    }

    async getPokemons() {
        return await this.PokemonRepository.find();
    }
}
