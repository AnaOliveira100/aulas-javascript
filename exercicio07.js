'use strict';

// Selecionando os elementos
const formExercicio = document.querySelector("#exercicio");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const pMedia = document.querySelector("#media");
const pSituacao = document.querySelector("#situacao");
const divResultados = document.querySelector(".resultados");

// Detectando o acionamento do formulário
formExercicio.addEventListener("submit", function(event){
    event.preventDefault();

    // Acessando os elementos e pegar o valor de cada um
    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);

    // Calculando a média
    const media = (nota1 + nota2) / 2;

    // Mostrando a média no HTML
    pMedia.textContent = media.toFixed(2);

    // Verificando a média para determinar a situação
    if(media >= 7){
        pSituacao.textContent = "aprovado";
        divResultados.style.color = "blue";
    } else {
        pSituacao.textContent = "reprovado";
        divResultados.style.color = "red";
    }
})
