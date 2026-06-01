'use strict';

const aluno = {
    // propriedade: valor
    nome_completo: "Chaves do 8",
    data_nascimento: "10/5/1950",
    
    // propriedade: [valores]
    telefones: ["(11) 2135-0300", "(11) 98765-4321"],

    // propriedade: {descrição}
    endereco: {
        rua: "Rua Francisco Coimbra",
        numero: "403",
        bairro: "Penha" 
    }
};

// Acessando propriedade simples
console.log(aluno.nome_completo);

// Acessando propriedade que é UM ARRAY
console.log(aluno.telefones[1]);

// Acessando propriedade que é UM OBJETO
console.log(aluno.endereco.bairro);