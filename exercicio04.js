'use strict';

/* SOBRE UM SINAL DE IGUAL 
Significa dar um valor (atribuir) à uma variável/constante 

Quer fazer comparações de igualdade?
Pelo menos DOIS SINAIS DE IGUAL == 
Na dúvida, use TRÊS === */
let estoque = 50;

// Checando se o valor de estoque está zerado
if(estoque == 0){ 
    console.log("Estoque está em situação crítica!");    
} else if(estoque <= 10){
    console.log("Estoque está em situação baixo");    
} else {
    console.log("Estoque está em situação normal");
}

/* Refatoração/refatora: implementar melhoria */
let resultado;

if(estoque == 0){
    resultado = "crítica";
} else if(estoque <= 10){
    resultado = "baixo";
} else {
    resultado = "normal";
}

console.log("Estoque está em situação "+resultado);