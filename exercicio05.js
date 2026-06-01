'use strict';

// Valor inicial da compra (SEM DESCONTO)
let valorInicial = 50;

// Valor final da compra (COM DESCONTO APLICADO)
let valorFinal = 0;

// Percentual de Desconto (depende das condições)
let percentualDesconto = 0; // VALOR PADRÃO (nem precisa do else)

// Valor que foi economizado
let economizado = 0;

/* Determinar a lógica condicional para o desconto */
if(valorInicial > 300){
    percentualDesconto = 0.2;
} else if(valorInicial > 100){
    percentualDesconto = 0.1;
} 

// Calcular o valorFinal com o desconto aplicado
valorFinal = valorInicial - valorInicial * percentualDesconto;
economizado = valorInicial - valorFinal;

console.log(valorInicial);
console.log(percentualDesconto);
console.log(valorFinal);
console.log(economizado);




