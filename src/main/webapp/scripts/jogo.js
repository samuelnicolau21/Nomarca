import {criarTabuleiro} from './utilJogo/criarTabuleiro.js';


const idPartida = sessionStorage.getItem("idPartida");
//document.getElementById("idPartida").textContent=idPartida;

const souJogador1 = sessionStorage.getItem("souJogador1") === "true";
const tabuleiro = document.querySelector(".tabuleiro");
const som_inicio= new Audio('./sons/game-start.mp3');
som_inicio.volume = 1;
som_inicio.play();
if (!souJogador1) {
    tabuleiro.classList.add("tabuleiro-jogador1");
} else {
    tabuleiro.classList.add("tabuleiro-jogador2");
}

criarTabuleiro();