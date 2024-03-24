const animais = [
    {name: "Cachorro", respostas: [true, false, false, false, false, true, false, false, true, true]},
    {name: "Gato", respostas: [true, false, false, false, false, true, false, true, false, true]},
    {name: "Cobra", respostas: [false, false, false, false, true, false, true, false, false, false]},
    {name: "Vaca", respostas: [true, true, false, false, false, false, false, false, true, false]},
    {name: "Pato", respostas: [false, true, true, true, false, false, false, false, false, false]},
    {name: "Galinha", respostas: [false, true, true, false, false, false, false, false, false, false]},
    {name: "Tubarão", respostas: [false, false, false, true, true, false, true, false, true, false]},
    {name: "Jacaré", respostas: [true, false, false, true, true, false, true, false, true, false]},
    {name: "Peixe", respostas: [false, true, false, true, false, true, true, false, false, false]},
    {name: "Leão", respostas: [true, false, false, false, true, false, true, true, true, true]}
]

const perguntas = [
    {QN: 0, pergunta: "Seu animal possui 4 patas?"},
    {QN: 1, pergunta: "Seu animal está em fazendas?"},
    {QN: 2, pergunta: "Seu animal possui asas?"},
    {QN: 3, pergunta: "Seu animal é um nadador?"},
    {QN: 4, pergunta: "Seu animal é perigoso?"},
    {QN: 5, pergunta: "Seu animal é doméstico?"},
    {QN: 6, pergunta: "Seu animal é selvagem?"},
    {QN: 7, pergunta: "Seu animal é um felino?"},
    {QN: 8, pergunta: "Seu animal é grande porte?"},
    {QN: 9, pergunta: "Seu animal possui pelos?"}
]

function gerarLista() {
    for (let i = 0 ; i < animais.length ; i++) {
        let elemento = document.createElement('li')
        elemento.textContent = animais[i].name
        document.querySelector('#animaisLista').appendChild(elemento)
    }
}
window.onload = gerarLista()

var valorQN
function returnValor() {
    return valorQN
}

function perguntaAleatoria() {
    if(perguntas.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * perguntas.length)
        document.getElementById('pergunta').innerText = perguntas[indiceAleatorio].pergunta
        valorQN = perguntas[indiceAleatorio].QN
        perguntas.splice(indiceAleatorio, 1)
    }
}

function checkAnimal(valorQN, resposta) {
    for(let i = 0 ; i < animais.length ; i++) {
        if(animais[i].respostas[valorQN] != resposta){
            animais.splice(i,1)
        }  
    }
    if (animais.length == 1) {
        document.querySelector('#resposta').innerText = animais[0].name
    } else {
        perguntaAleatoria()
    }
}
