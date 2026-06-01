'use strict';

// Declarando um array
let alunos = ["Ozzy", "Dio", "Freddy", "Layne"];

// Acessando o array inteiro
console.log(alunos);

// Acessando cada elemento através do ÍNDICE
console.log(alunos[1]); // Dio
console.log(alunos[3]); // Layne

// Saída personalizada com dados de array
console.log(`O ${alunos[0]} morreu em julho de 2025.`);

// Array com tipos de dados diferentes (Heterogêneo)
let teste;
let coisas = ["Senac", 10, "<h2>Oi</h2>", 15.77, teste];
console.log(coisas);
console.log(coisas[2]);

let dobro = coisas[1] * 2;
console.log(dobro);


/* Arrays como MATRIZES (ARRAY DENTRO DE ARRAY)
ARRAY ANINHADO */
let tecnologias = [
    ["JS", "HTML", "WordPress", "TCP/IP", "HTTP"],
    ["Figma", "Photoshop", "PhotoScape", "GIMP"],
    ["SQL", "Python"],
    ["Games 2D", ["Unity", "Unreal"] ]
];

console.log(tecnologias[0][2]); // WordPress
console.log(tecnologias[2][0]); // SQL
console.log(tecnologias[1][3]); // GIMP
console.log(tecnologias[3][1][0]); // Unity








