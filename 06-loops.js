'use strict';

console.log("Exemplo 1: while (enquanto):");
/* Lógica: enquanto uma condição for VERDADEIRA,
faça/execute ações/processos. */

// Variável de controle de repetição (contadora)
let contador = 1;

while(contador <= 5){
    console.log("Valor da variável: "+contador);

    // Atualiza o valor da variável de controle (incrementa)
    contador++;
    // contador = contador + 1;
}


console.log("\nExemplo 2: for (para):");
/* Lógica: execute uma série de ações a partir de um valor
inicial até um valor final. */
for( let i = 1; i <= 10; i++ ){
    console.log("I vale: "+i);
}

console.log("\nExemplo 3: loop para acessar ARRAY:");
/* Lógica: execute ações enquanto existir dados no array. */

const bandas = ["Slayer", "Nightwish", "Rush", "Metallica", "Iced Earth", "Scorpions", "Kiss"];

/* Começamos em ZERO obrigatoriamente,
e a condição de repetição é enquanto o "i" for menor
que a quantidade de elementos do array. 

Propriedade length: comprimento/tamanho/quantidade de elementos */

// Boa prática guardar o tamanho do array ANTES de iniciar o loop
let tamanho = bandas.length; // cache (memória)

for( let i = 0; i < tamanho; i++ ){
    console.log(bandas[i]);
}

console.log("\nExemplo 4 for/of: loop específico para ARRAY:");
const alunos = ["Marcelo", "Alexandre", "Emillye", "Yuri", "Raquel"];

/* Lógica: acessando cada aluno a partir do array alunos */
for(const aluno of alunos){
    console.log(aluno);
}

console.log("\nExemplo 5 for/in: loop específico para OBJETO:");
const pessoa = {
    nome: "Seu Madruga",
    idade: 66,
    cidade: "São Paulo"
};

/* Lógica: acessando as propriedades do objeto pessoa */
for(const propriedade in pessoa){
    // console.log(propriedade); // traz apenas o nome da prop.
    // console.log(pessoa[propriedade]); // traz os valores
    
    console.log(propriedade+": "+pessoa[propriedade]);
}

