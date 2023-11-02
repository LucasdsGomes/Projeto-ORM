const chalk = require('chalk');

class ORM {
    constructor(){
        if (this.constructor === ORM) {
            throw new Error(chalk.red("Essa classe não pode ser diretamente instanciada"))
        }
    }

    static criar(newPokemon) {
        try {
            this.arrayPokemon.push(newPokemon);
            console.log(chalk.green("O pokémon foi criado com sucesso!"))
        } catch (e) {
            throw new Error(chalk.red("Faltam pokémons para serem adicionados!"))
        }
        
    }

    static atualizar(updatePokemon, replacePokemon) {
        const pokemonToUpdate = this.arrayPokemon.find(pokemon => pokemon.nome === updatePokemon);
        try {
            if (pokemonToUpdate) {
                pokemonToUpdate.nome = replacePokemon;
                console.log(chalk.green("O pokémon desejado foi atualizado com sucesso!"));
            } else {
                console.log(chalk.red("O pokémon desejado não está listado para atualização."));
            }
        } catch (e) {
            throw new Error(chalk.red("Há erros nos nomes dos pokémons a serem atualizados."))
        }

    }

    static remover(removePokemon) {
        const pokemonRemovido = this.arrayPokemon.find(pokemon => pokemon.nome === removePokemon);
    
        try {
            if (pokemonRemovido) {
                this.arrayPokemon = this.arrayPokemon.filter(pokemon => pokemon.nome !== removePokemon);
                console.log(chalk.green("Pokémon removido com sucesso!"))
            } else {
                console.error(chalk.red("O pokémon desejado não foi encontrado!"))
            }
        }catch (e) {
            throw new Error(chalk.red("O pokémon a ser removido não foi inserido."))
        }


    }
    

    static listar(){
        try {
            this.arrayPokemon.forEach((element, posicao) => {
                console.log(`Pokémon: ${element.nome}, Posição: ${posicao}`);
            });
        } catch (e) {
            throw new Error(chalk.red("Erro ao listar pokémons inválidos."))
        }

    }
}

module.exports = ORM
