import {atualizarJogo} from './atualizarJogo.js';
import { avisaMovimentoIlegal } from './avisaMovimentoIlegal.js';
import {avisaMovimentoLegal} from './avisaMovimentoLegal.js';
let socket;

function iniciarSocketDeMovimento(nomeDeUsuario, idPartida) {
	if (socket && socket.readyState <= 1) return socket; // já está conectado ou conectando

	socket = new WebSocket(`ws://localhost:8080/Arcana_/controladorDeJogo/${nomeDeUsuario}/${idPartida}`);

	socket.onopen = () => console.log("Socket de movimento aberto");
	socket.onclose = () => console.log("Socket de movimento fechado");
	socket.onerror = () => console.log("Erro no socket de movimento");
	socket.onmessage = (event) => {
		if (event.data === "movimento inválido") {
			console.log("movimento inválido");
			avisaMovimentoIlegal();
		} else {
			const jogo = JSON.parse(event.data);
			console.log("movimento válido")
			atualizarJogo(jogo);
			avisaMovimentoLegal();
		}
	};

	return socket;
}

function getSocketMovimento() {
	return socket;
}

export { iniciarSocketDeMovimento, getSocketMovimento };