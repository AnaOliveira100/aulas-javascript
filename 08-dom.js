'use strict';

/* Funções/métodos de seleção de elementos:
getElementById, getElementsByClassName, getElementsByTagName
querySelector, querySelectorAll */

/* Exemplo 01 */
// Selecionando os elementos
const pValor = document.querySelector("#valor");
const botaoSomar = document.querySelector("#somar");
const botaoSubtrair = document.querySelector("#subtrair");

/* Sobre Event Listener
Sempre que quisermos trabalhar com interações de qualquer natureza
em nossa página, é necessário adicionar um ouvinte de evento 
(addEventListener) ao elemento que desejamos manipular. E quando o evento
acontecer, uma função callback é a responsável por executar as ações
que queremos. */

// Variável para receber a contagem a cada clique
let contador = 0;

// Iniciando o botão subtrair com estado desabilitado
botaoSubtrair.disabled = true; // LIGADO

botaoSomar.addEventListener("click", function(){
    contador++; // Incrementando a contagem

    // Acessa o elemento selecionado e mostra o valor de contador
    pValor.textContent = contador;

    // Habilitando o botão subtrair (disabled false)
    botaoSubtrair.disabled = false;
});

botaoSubtrair.addEventListener("click", function(){
    /* 1) Como impedir que o contador fique negativo? */
    if(contador > 0) contador--; // Decrementando a contagem

    pValor.textContent = contador; // Acessa e mostra
    
    /* 2) Como desativar o botao subtrair quando a contagem for ZERO? */
    if(contador === 0) botaoSubtrair.disabled = true;
});

/* Exemplo 02 */

// Selecionando o elemento através do seletor de classe
const imgFoto = document.querySelector(".foto");

// Selecionando todos os botões do exemplo
const botoesDeFoto = document.querySelectorAll("[data-foto]");

// Percorrer os elementos do array de botões (NodeList)
for(const botao of botoesDeFoto){
    
    // Para cada botão, monitorar o evento de clique
    botao.addEventListener("click", function(){
        // console.log(botao.textContent);

        // Lendo os valores dos atributos data- usando dataset
        // Atenção: coloque apenas a parte que vem após o data-
        const imagem = botao.dataset.foto;
        const texto = botao.dataset.texto;

        // Adicionando ao img a imagem e o texto selecionados
        imgFoto.src = imagem;
        imgFoto.alt = texto;      
    });
}

/* Exemplo 03 */
const textareaMensagem = document.querySelector("#mensagem");
const spanContadorCaracteres = document.querySelector("#contador");
const spanContatorRegressivo = document.querySelector("#regressivo");

// Evento "input": captura do que é digitado em tempo real
textareaMensagem.addEventListener("input", function(){
    // Capturando a quantidade de caracteres digitados
    let totalCaracteres = textareaMensagem.value.length;

    // Exibir o total caracteres no span
    spanContadorCaracteres.textContent = totalCaracteres;

    // Contagem regressiva
    const limiteMaximo = 100;
    const contagemRegressiva = limiteMaximo - totalCaracteres; // limite - qtd digitada
    spanContatorRegressivo.textContent = contagemRegressiva;

    // Se o total de caracteres for maior ou igual a 100
    if(totalCaracteres >= limiteMaximo){
        // Então aplicamos a classe excesso (negrito/vermelho) e muda a cor de fundo do campo
        spanContadorCaracteres.classList.add("excesso");
        textareaMensagem.style.background = "pink";
    } else {
        // Senão, remove a classe e tira a cor de fundo do campo
        spanContadorCaracteres.classList.remove("excesso");
        textareaMensagem.style.background = "transparent";
    }

    // Versão com ternário
    // spanContadorCaracteres.className = totalCaracteres >= 100 ? 'excesso' : '';
});

/* Exemplo 04 */
const kbdTeclaPressionada =  document.querySelector("#tecla kbd");
const pagina = document.body;

// Monitoramento de eventos de teclado sempre a partir do document
document.addEventListener("keypress", function(event){
    // Capturando a tecla usada a partir do event.key
    const teclaUsada = event.key;
    
    // Exibindo a tecla no HTML
    kbdTeclaPressionada.textContent = teclaUsada;

    if(teclaUsada === "a"){
        kbdTeclaPressionada.style.background = "yellow";
        pagina.style.background = "darkblue";
        pagina.style.transition = "3s";
    }

    if(teclaUsada === "r"){
        kbdTeclaPressionada.style.background = "transparent";
        pagina.style.background = "#f4f4f4";
    }
    
});


/* Exemplo 05 */
const inputTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#lista");

botaoAdicionar.addEventListener("click", function(){
    // Capturar a tarefa digitada no input
    const tarefaDigitada = inputTarefa.value;

    // Validação: se não for digitada nenhuma tarefa, interrompa a função
    if(tarefaDigitada === "") return;

    // Criar o elemento <li>
    const item = document.createElement("li");

    // Adicionando o conteúdo (tarefa digitada) ao novo item <li>
    item.textContent = tarefaDigitada;

    // Inserindo o novo <li> na lista
    listaTarefas.appendChild(item);

    inputTarefa.value = ""; // reset
    inputTarefa.focus(); // devolvendo o foco (cursor)

    // Quando ocorrer um clique no item/tarefa, adicionar a classe feito
    item.addEventListener("click", function(){
        item.classList.toggle("feito"); // add
    });
});

/* Mapeamento de Evento
Detectar o ENTER durante o uso do input, e executar
a função de clique do botão adicionar */
inputTarefa.addEventListener("keyup", function(event){
    if(event.key === "Enter") botaoAdicionar.click();
});


/* Exemplo 06 */
const formExemplo06 = document.querySelector("#exemplo06");
const inputNome = formExemplo06.querySelector("#nome");
const inputIdade = formExemplo06.querySelector("#idade");
const pSaida = document.querySelector("#saida");

// Detectar o acionamento do formulário: evento submit
formExemplo06.addEventListener("submit", function(event){
    // Anulando o comportamento padrão do formulário
    event.preventDefault();

    // Capturando os dados digitados e tratando
    const nome = inputNome.value.trim(); // removendo espaços no início/fim
    const idade = Number(inputIdade.value); // garantindo que a idade seja número

    /* Validações dos campos */

    // Se nome estiver vazio, avise o usuário
    if(nome === ""){
        pSaida.textContent = "Por favor, preencha o nome";
        pSaida.style.color = "red";
        return; // pare tudo (enquanto essa validação não for atendida)
    }


    // Se idade NÃO É número OU se é abaixo de zero OU se é acima de 120 OU se é vazia
    if(isNaN(idade) || idade < 0 || idade > 120 || idade == ""){
        pSaida.textContent = "Por favor, preencha idade entre 0 e 120";
        pSaida.style.color = "purple";
        return;
    }

    // Nenhuma das condições anteriores deu true? então significa que tudo deu certo!
    // Portanto, avisamos o usuário:
    pSaida.textContent = `Olá ${nome}, você tem ${idade} anos! Seus dados foram enviados!`;
    pSaida.style.color = "blue";

    formExemplo06.reset(); // reset (limpeza) dos campos
    inputNome.focus(); // devolvendo o cursor (foco) ao primeiro campo
});

/* Exemplo 07 */
const inputSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

// Ao pressionar botão
botaoMostrar.addEventListener("pointerdown", function(){
    inputSenha.type = "text";
    botaoMostrar.textContent = "🙈 Ocultar senha";
});

// Ao "soltar" ou liberar o botão
botaoMostrar.addEventListener("pointerup", function(){
    inputSenha.type = "password";
    botaoMostrar.textContent = "👁️ Mostrar senha";
});


