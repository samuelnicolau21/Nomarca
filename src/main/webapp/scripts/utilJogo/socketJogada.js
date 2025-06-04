import { atualizarJogo} from './atualizarJogo.js';
import { avisaEdicaoLegal } from './avisaEdicaoLegal.js';
import { avisaMovimentoIlegal } from './avisaMovimentoIlegal.js';
import { avisaMovimentoLegal} from './avisaMovimentoLegal.js';

let socket;
let jogo;
function iniciarSocketDeJogada(nomeDeUsuario, idPartida) {
	if (socket && socket.readyState <= 1) return socket; // já está conectado ou conectando

	socket = new WebSocket(`ws://localhost:8080/Arcana_/controladorDeJogo/${nomeDeUsuario}/${idPartida}`);

	socket.onopen = () => console.log("Socket de jogada aberto");
	socket.onclose = () => console.log("Socket de jogada fechado");
	socket.onerror = () => console.log("Erro no socket de jogada");
	socket.onmessage = (event) => {
		if (event.data === "movimento inválido") {
			console.log("movimento inválido");
			avisaMovimentoIlegal();
		} 
		else if(event.data == "edição inválida"){
			console.log("edição inválida");
			avisaMovimentoIlegal();
		}
		
		else{
			 jogo = JSON.parse(event.data);
			if(jogo.mensagem == "edição válida"){
						console.log("edição válida");
						atualizarJogo(jogo);
						avisaEdicaoLegal();
					}
			else if(jogo.mensagem == "movimento válido") {
						console.log("movimento válido")
						atualizarJogo(jogo);
						avisaMovimentoLegal();
					}
		}
	};

	return socket;
}

function getSocketJogada() {
	return socket;
}
function getJogo(){
	if (!jogo) return;
	return jogo;
}


export { iniciarSocketDeJogada, getSocketJogada };
export {getJogo};