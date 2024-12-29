export class Character {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(personagem) {
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
    }
}