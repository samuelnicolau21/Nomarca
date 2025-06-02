import {atualizarJogo} from './atualizarJogo.js';
import { avisaMovimentoIlegal } from './avisaMovimentoIlegal.js';
let socket;

function iniciarSocketDeEdicao(nomeDeUsuario, idPartida) {
	if (socket && socket.readyState <= 1) return socket; // já está conectado ou conectando

	socket = new WebSocket(`ws://localhost:8080/Arcana_/controladorDeJogo/${nomeDeUsuario}/${idPartida}`);

	socket.onopen = () => console.log("Socket de edição aberto");
	socket.onclose = () => console.log("Socket de edição fechado");
	socket.onerror = () => console.log("Erro no socket de edição");
	socket.onmessage = (event) => {
		if (event.data === "movimento inválido") {
			console.log("Edição inválida");
			avisaMovimentoIlegal();
		} else {
			const jogo = JSON.parse(event.data);
			console.log("Edição válida");
			atualizarJogo(jogo);
		}
	};

	return socket;
}

function getSocketDeEdicao() {
	return socket;
}

export { iniciarSocketDeEdicao, getSocketDeEdicao };
