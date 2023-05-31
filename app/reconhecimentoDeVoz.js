// declarando minhas constantes
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');
const recognition = new SpeechRecognition();

// iniciando o SpeechRecognition
recognition.lang = 'pt-Br';
recognition.start()
recognition.addEventListener('result', onSpeak);

function onSpeak(event){
    // pega o transcript da captura de audio
    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute) 
    verificaSeOChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Voce disse: </div>
        <span class="box"> ${chute} </span>
    `
}
// fazendo que o SpeechRecognition continue ativo.
recognition.addEventListener('end', ()=> recognition.start());
