'use strict';



// criando/configuraçoes objetivo de opcoes para slidee
const opcoes = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pagination: false,

    //desgin responsivo
    perPage: 3,
    gap: "1rem,"
    breakpoints: {
        800: ( perPage: 2 ),
        600: ( perPage: 1 )
}


};
// criando e guardando o slider em memoria
const slider = new Splide('.splide', opcoes);

//ativando
slider.mount();