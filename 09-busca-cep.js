'use strict';

const formEndereco = document.querySelector("#formulario-endereco");
const inputCep = formEndereco.querySelector("#cep");
const inputEndereco = formEndereco.querySelector("#endereco");
const inputBairro = formEndereco.querySelector("#bairro");
const inputCidade = formEndereco.querySelector("#cidade");
const inputEstado = formEndereco.querySelector("#estado");
const pMensagem = formEndereco.querySelector("#mensagem");

// Aplicando a máscara ao CEP
VMasker(inputCep).maskPattern("99999-999");

// Capturando o cep digitado
inputCep.addEventListener("input", function(){
    const cepDigitado = inputCep.value;
    
    // Se a quantidade digitada no campo cep é 9
    if(cepDigitado.length === 9){
        // Chamamos a função de busca do cep e passamos o cep que foi digitado
        buscarCep(cepDigitado);
    }
});

// Quando esta função for chamada, ela receberá o número do cep digitado
async function buscarCep(numeroCep){
    // Feedback para o usuário
    pMensagem.textContent = "Aguarde, buscando...";
    pMensagem.style.color = "black"; // cor padrão
    
    // Montar a consulta para a API contendo o cep que foi informado
    const urlConsulta = `https://viacep.com.br/ws/${numeroCep}/json/`;

    /* Processo de comunicação com a API, busca, recebimento 
    e tratamento de erro */
    try {
        // Iniciar a comunicação com a API usando a função fetch
        // Obs1: usamos await para "aguardar" a resposta da API
        // Obs2: SEMPRE que usar await, coloque async na declaração da função
        const resposta = await fetch(urlConsulta);

        // Acessa a resposta e captura os dados em formato JSON (objeto)
        const dados = await resposta.json();
        
        console.log(dados);    
        
        // Se o objeto dados tiver a prop. erro, significa que o CEP não foi encontrado
        if(dados.erro){
            // Avisamos o usuário:
            pMensagem.textContent = "CEP não encontrado";
            pMensagem.style.color = "purple";
            return;
        }

        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;
        inputEstado.value = dados.uf;

        pMensagem.textContent = "CEP encontrado";
        pMensagem.style.color = "green";        
    } catch (error) {
        console.error("Erro na requisição: "+error);
        pMensagem.textContent = "Erro na busca do CEP.";
        pMensagem.style.color = "red";
    }
}