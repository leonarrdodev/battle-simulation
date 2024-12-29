import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(nome, vida, ataque, defesa, escudo, posicao) {
        super(nome, vida, ataque, defesa)
        this.escudo = escudo
        this.posicao = posicao
        this.defesaOriginal = defesa
    }

    atacar(personagem) {
        if(this.posicao === 'ataque'){
            if (personagem.vida > 0) {
                // Calcula o dano como a diferença entre ataque e defesa, com um mínimo de 0
                let dano = Math.max(0, this.ataque - personagem.defesa);
                personagem.vida = Math.max(0, personagem.vida - dano); // Garante que a vida não fique negativa
                
                // Verifica se o personagem foi derrotado
                if (personagem.vida === 0) {
                    console.log(`Vitória de ${this.nome}!\n${personagem.nome} foi derrotado.`);
                }
            } else {
                console.log(`${personagem.nome} já foi derrotado!`);
            }
        }else{
            console.log(`${this.nome} não pode atacar pois está em posição de defesa`)
        }
    }

    trocarPosicao(posicao){
        this.posicao = posicao
        if(this.posicao === 'defesa'){
            this.defesa += this.escudo
        }
        else{
            this.defesa = this.defesaOriginal
        }
    }
}