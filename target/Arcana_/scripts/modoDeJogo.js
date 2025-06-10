import { configurarBotoes } from './utilModoJogo/configurarBotoes.js';
import { verificarRespostaDoServidor } from './utilModoJogo/verificarRespostaDoServidor.js';

const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");

if (!nomeDeUsuario) {
    alert("Erro: Nome de usuário não encontrado. Faça login novamente.");
    window.location.href = "login.html";
}
// Detecta protocolo ws ou wss conforme o protocolo da página
const protocolo = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
// Usa o host atual (domínio + porta, se houver)
const host = window.location.host;
let socket = new WebSocket(`${protocolo}${host}/Arcana_/modoDeJogo/${nomeDeUsuario}`);

socket.onopen = () => configurarBotoes(socket);

socket.onmessage = (event) => verificarRespostaDoServidor(event);


