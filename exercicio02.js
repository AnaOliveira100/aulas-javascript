'use strict';

const coisasQueGosto = [
    "Brigadeiro",           // 0
    "Torta de Limão",       // 1
    "Paçoca",               // 2
    "Pavê",                 // 3
    "Bolo de Maracujá",     // 4
    "Mousse de Limão",      // 5
    "Doces em geral"        // 6
];

console.log(coisasQueGosto);
console.table(coisasQueGosto); // bom para arrays!

// Concatenação: uso de ASPAS 'simples' ou duplas "" e o MAIS +
// Template String: uso de CRASE `` e ${}
let frase = `Gosto muito de ${coisasQueGosto[1]}, de ${coisasQueGosto[4]} e ${coisasQueGosto[6]}`;
console.log(frase);