'use strict';

/* 1. Um array chamado "clientes" contendo 3 objetos.
Cada objeto deverá ter uma propriedade chamada "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian"). */
const clientes = [
    {
        identificador: 1,
        nome: "Dio"
    },
    {
        identificador: 2,
        nome: "Ozzy"
    },
    {
        identificador: 3,
        nome: "Ian"
    },
];

/* 2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente exatamente como indicado abaixo:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 */

for(const cliente of clientes){
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.identificador}`);
}