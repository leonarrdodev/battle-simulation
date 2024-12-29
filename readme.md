# Battle Simulation

Este projeto é um exercício desenvolvido para treinar a implementação de mecânicas de combate e simulação de batalhas em JavaScript. O objetivo é criar um sistema simples de batalha entre personagens de RPG, onde cada personagem possui atributos como vida, ataque e defesa, além de habilidades específicas.

## Funcionalidades
Ataque: Cada personagem pode atacar outro, causando dano com base em seu ataque e defesa.  

Cura (Mago): O mago pode curar outros personagens, restaurando parte de sua vida (não podendo ultrapassar o máximo de 100 de vida).  

Troca de Posição (Guerreiro): O guerreiro pode alternar entre as posições de ataque e defesa, afetando sua defesa.  

Mecânica de Vitória: O jogo declara um vencedor quando a vida de um personagem chega a 0.

## Estrutura do Projeto
O projeto é composto por diversas classes que representam os diferentes tipos de personagens, sendo elas:
Character.js: Classe base para todos os personagens, com métodos para atacar e verificar derrotas.  
Mage.js: Subclasse de Character que possui habilidades de ataque mágico e cura.  
Thief.js: Subclasse de Character com ataques rápidos e dano multiplicado.  
Warrior.js: Subclasse de Character com mecânica de defesa e troca de posição.  