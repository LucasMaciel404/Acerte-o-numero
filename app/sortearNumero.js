// função criada com objetivo de obter um numro aleatorio
const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

// gera um numero aleatorio
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

// mostrando o menor valor
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

// mostrando o menor valor
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;