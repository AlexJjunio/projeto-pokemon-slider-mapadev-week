/*
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - Passo 3 - fazer aparecer o próximo cartão da lista
    - Passo 4 - buscar cartão que esta com a class selecionado e esconder
*/

//Dicas abaixo
//alt shift F, para formatar identação
//usar aspas simples OU duplas


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}
  

btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1) return; 

    esconderCartaoSelecionado();


    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener('click', function(){
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
 });
