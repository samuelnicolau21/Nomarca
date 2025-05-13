import { enviarMensagem } from "../util/enviarMensagem.js";
import { atualizarJogo } from "./atualizarJogo.js";

const idPartida = sessionStorage.getItem("idPartida");
const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");
let socket = new WebSocket(`ws://localhost:8080/Arcana_/controladorDeJogo/${nomeDeUsuario}/${idPartida}`)

socket.onmessage = function(event){
	if(event.data=="movimento inválido"){
		console.log("movimento inválido")
	}
	else{
		let jogo = JSON.parse(event.data);
		atualizarJogo(jogo)
	}	  
}

function moverPeca(celulaOrigem,celula){
	if (celulaOrigem && celulaOrigem.querySelector('.container-peca')) {
		
		let mensagem = {
			"nomeDeUsuario":nomeDeUsuario,
			"idPartida":idPartida,
			"acao":"movimentoMago",
			"idOrigem":celulaOrigem.id,
			"idDestino":celula.id,"magia":{}
		};
		
		if(socket.readyState==WebSocket.OPEN){
			enviarMensagem(mensagem,socket)
		}
			 	
	}
}

export {moverPeca}