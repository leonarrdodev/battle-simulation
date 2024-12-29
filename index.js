import { Mage } from "./Mage.js"
import { Thief } from "./Thief.js"
import { Warrior } from "./Warrior.js"

const guerreiro = new Warrior("Guerreiro", 100, 20, 10, 5, "ataque");
const mago = new Mage("Mago", 80, 15, 5, 10);
const ladrao = new Thief("Ladrão", 70, 25, 5);

// Exibindo o status inicial dos personagens
console.log(`Status inicial:\n${guerreiro.nome}: Vida = ${guerreiro.vida}, Ataque = ${guerreiro.ataque}, Defesa = ${guerreiro.defesa}`);
console.log(`${mago.nome}: Vida = ${mago.vida}, Ataque = ${mago.ataque}, Defesa = ${mago.defesa}`);
console.log(`${ladrao.nome}: Vida = ${ladrao.vida}, Ataque = ${ladrao.ataque}, Defesa = ${ladrao.defesa}`);

// Realizando ataques
guerreiro.atacar(mago);  // Guerreiro ataca Mago
mago.atacar(guerreiro);  // Mago ataca Guerreiro
ladrao.atacar(guerreiro);  // Ladrão ataca Guerreiro

// Verificando se o Mago precisa de cura
mago.curar(guerreiro); // Mago tenta curar Guerreiro

// Alterando posição do Guerreiro para 'defesa'
guerreiro.trocarPosicao('defesa');
guerreiro.atacar(mago); // Guerreiro não pode atacar pois está em defesa

// Testando ataque do Guerreiro enquanto em defesa
guerreiro.trocarPosicao('ataque');
guerreiro.atacar(mago); // Guerreiro ataca novamente

// Testando derrota do Mago e o Ladrão finalizando a batalha
mago.atacar(ladrao);  // Mago ataca Ladrão
ladrao.atacar(mago);  // Ladrão finaliza Mago

// Exibindo resultados finais
console.log(`\nResultado Final:\n${guerreiro.nome}: Vida = ${guerreiro.vida}`);
console.log(`${mago.nome}: Vida = ${mago.vida}`);
console.log(`${ladrao.nome}: Vida = ${ladrao.vida}`);