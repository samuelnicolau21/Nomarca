import {criarTabuleiro} from './utilJogo/criarTabuleiro.js';


const idPartida = sessionStorage.getItem("id_partida");
document.getElementById("partida").textContent=idPartida;

criarTabuleiro();



