import { configurarBotoes } from './utilModoJogo/configurarBotoes.js';
import { verificarRespostaDoServidor } from './utilModoJogo/verificarRespostaDoServidor.js';

const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");

if (!nomeDeUsuario) {
    alert("Erro: Nome de usuário não encontrado. Faça login novamente.");
    window.location.href = "login.html";
}

let socket = new WebSocket(`ws://localhost:8080/Arcana_/modoDeJogo/${nomeDeUsuario}`);

socket.onopen = () => configurarBotoes(socket);

socket.onmessage = (event) => verificarRespostaDoServidor(event);


