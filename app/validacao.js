function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;
    // verifica se o chute é numerico
    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido.</div>';
    }
    // verifica se o chute é maior ou menor que o permitido
    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div> Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor} </div>`;
    }
    if( numero > numeroSecreto ){
        elementoChute.innerHTML += '<div>O numero secreto é menor <i class="fa-regular fa-arrow-up-long"></i></div>';
    } else if(numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O numero secreto é maior <i class="fa-regular fa-arrow-up-long"></i></div>';
    }
    // caso o chute esteja correto.
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou!! </h2>
            <h3> O número secreto era: ${numeroSecreto}<h3>

            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    } 
}

// minhas funções...
function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor ;
}
document.body.addEventListener('click', ( e )=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})