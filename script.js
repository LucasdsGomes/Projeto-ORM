const orm = require('./scriptORM');

class Pokemon extends orm {
    static arrayPokemon = [];
}

Pokemon.criarNovoPokemon({"nome": "Pikachu"});
Pokemon.criarNovoPokemon({"nome": "Raichu"});
Pokemon.criarNovoPokemon({"nome": "Articuno"});
Pokemon.buscarPokemon(2)
Pokemon.atualizarPokemonExistente(1, "Magnemite");
Pokemon.removerPokemonExistente(0);
Pokemon.listarPokemons();

module.exports = Pokemon

