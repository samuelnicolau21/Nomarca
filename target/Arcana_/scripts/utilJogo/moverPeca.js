import { enviarMensagem } from "../util/enviarMensagem.js";
import {avisaMensagemNaoEnviada} from './avisaMensagemNaoEnviada.js';
import {iniciarSocketDeJogada, getSocketJogada} from './socketJogada.js'; 


const idPartida = sessionStorage.getItem("idPartida");
const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");

function moverPeca(celulaOrigem,celula){
	if (celulaOrigem && ( celulaOrigem.querySelector('.container-peca') 
		||celulaOrigem.querySelector('.container-bloco') ) ) {
		
		// Certifica que o socket está iniciado
		iniciarSocketDeJogada(nomeDeUsuario, idPartida);
		const socket = getSocketJogada();
		
		let mensagem = {
			"nomeDeUsuario":nomeDeUsuario,
			"idPartida":idPartida,
			"acao":"movimento",
			"idOrigem":celulaOrigem.id,
			"idDestino":celula.id,"magia":{}
		};
		
		if(socket.readyState==WebSocket.OPEN){
			console.log("enviando mensagem de movimento");
			enviarMensagem(mensagem,socket)
		}
		else{
			console.log("erro ao enviar mensagem de movimento")
			avisaMensagemNaoEnviada();
		}
			 	
	}
}

export {moverPeca}