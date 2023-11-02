const orm = require('./scriptORM');

class Pokemon extends orm {
    static arrayPokemon = [];
}

Pokemon.criar({"nome": "Pikachu"});
Pokemon.criar({"nome": "Raichu"});
Pokemon.criar({"nome": "Articuno"});
Pokemon.remover("Raichu");
Pokemon.listar();

module.exports = Pokemon

