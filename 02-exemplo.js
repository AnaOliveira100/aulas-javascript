// Modo estrito da linguagem
/* Sem a declaração abaixo, corremos o risco de
esquecer de declarar explicitamente variáveis e constantes (ou seja, usar let e const) e também de usar 
palavras-chave (reserved words) da linguagem. */
"use strict";

// Usando uma variável sem DECLARAR (sem let)
aluno = "Fulano";
console.log(aluno); // erro, pois não usamos let

// Usar palavras-chave reservadas
let public = "Qualquer coisa";
console.log(public); // erro, pois public é reservada

