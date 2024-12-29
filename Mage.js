import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(nome, vida, ataque, defesa, magia){
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }
    atacar(personagem) {
        if (personagem.vida > 0) {
            // Calcula o dano como a diferença entre ataque e defesa, com um mínimo de 0
            let dano = Math.max(0, this.ataque - personagem.defesa) + this.magia;
            personagem.vida = Math.max(0, personagem.vida - dano); // Garante que a vida não fique negativa
            
            // Verifica se o personagem foi derrotado
            if (personagem.vida === 0) {
                console.log(`Vitória de ${this.nome}!\n${personagem.nome} foi derrotado.`);
            }
        } else {
            console.log(`${personagem.nome} já foi derrotado!`);
        }
    }

    curar(personagem) {
        if (personagem.vida > 0 && personagem.vida < 100) {
            // Cura o personagem, garantindo que não ultrapasse o máximo de 100 de vida
            personagem.vida = Math.min(100, personagem.vida + this.magia * 2);
        } else if (personagem.vida === 100) {
            console.log(`${personagem.nome} já está com a vida cheia!`);
        } else {
            console.log(`${personagem.nome} não pode ser curado porque está derrotado.`);
        }
    }
}