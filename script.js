const orm = require('./scriptORM');

class Pokemon extends orm {
    static arrayPokemon = [];
}

Pokemon.criar({"nome": "Pikachu"});
Pokemon.criar({"nome": "Raichu"});
Pokemon.criar({"nome": "Articuno"});
Pokemon.atualizar(1, "Magnemite");
Pokemon.remover(0);
Pokemon.listar();

module.exports = Pokemon

