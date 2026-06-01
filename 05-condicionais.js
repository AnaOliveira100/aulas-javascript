'use strict';

/* Operadores RELACIONAIS: usados para realizar comparações lógicas
== (IGUALDADE POR VALOR), === (IGUALIDADE POR VALOR E TIPO)
< (MENOR), > (MAIOR), <= (MENOR OU IGUAL), >= (MAIOR OU IGUAL)
!= (DIFERENÇA POR VALOR), !== (DIFERENÇA POR VALOR E TIPO) */

let a = 10;
let b = 10;
let c = 100; 
let d = "100"; // valor como string/texto

console.log(a > b);  // false (A não é maior que B)
console.log(a >= b); // true (A é igual a B)
console.log(c != a); // true (C é diferente de A)

// Comparando apenas VALOR (usando ==)
console.log(c == d); // true, pois VALORES são os mesmos

// Comparando VALOR E TIPO DE DADO (usando ===)
console.log(c === d); // false, pois TIPO DE DADO é diferente

/* Comandos CONDICIONAIS
if (SE), else (SENÃO), else if (SENÃO SE)
switch/case/default */

// Condicional SIMPLES (if)
console.log("\nExemplo 1: SIMPLES (if)");

let numero = 30;

if(numero >= 20){
    console.log("Se você ver esta mensagem, é porque a condição é true (verdadeira)");
}

// Quando se trata de uma única ação, podemos omitir as chaves e deixar em uma linha
if(numero >= 20) console.log("Uma única ação!");

// Condicional COMPOSTA (if/else)
console.log("\nExemplo 2: COMPOSTA (if/else)");

const aluno = "Marcelo";
let idade = 16;

// Lógica 1: condição maior ou igual a 18
if(idade >= 18){ 
    console.log(aluno + " é maior de idade.");
} else {
    console.log(aluno + " é menor de idade.");
}

// Lógica 2: condição menor que 18
if(idade < 18){
    console.log(aluno + " é menor de idade.");
} else {
    console.log(aluno + " é maior de idade.");
}

/* Operador chamado de ternário  ?:
Versão curta do if/else (shorthand if/else) */
let situacao = idade >= 18 ? "maior" : "menor";

console.log(`${aluno} é ${situacao} de idade.`);


// Condicional ENCADEADA (if/else if/else)
console.log("\nExemplo 3: ENCADEADA (if/else if/else)");

let media = 7;
let resultado = media >= 7 ? "aprovado" : "reprovado";

console.log(aluno + " está " +resultado);

/* Determinar o desempenho do aluno de acordo com a média que teve. Desempenhos possíveis:
- média acima de 9? ótimo
- média acima de 7? bom
- média acima de 5? ruim
- média até 5? péssimo */
if(media > 9){
    console.log("ÓTIMO 😍");
} else if(media > 7){
    console.log("BOM 😊");    
} else if(media > 5){
    console.log("RUIM 🙁");    
} else { // Aqui, basta o else (sem if, sem condição) pois é o que restou
    console.log("PÉSSIMO 😢")
}