import { enviarMensagem } from "../util/enviarMensagem.js";
import { atualizarJogo } from "./atualizarJogo.js";

const idPartida = sessionStorage.getItem("idPartida");
const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");
let socket = new WebSocket(`ws://localhost:8080/Arcana_/controladorDeJogo/${nomeDeUsuario}/${idPartida}`)

socket.onmessage = function(event){
	if(event.data=="movimento inválido"){
		console.log("movimento inválido")
		const som_movimento_ilegal= new Audio('./sons/illegal.mp3');
		som_movimento_ilegal.volume = 1;
		som_movimento_ilegal.play();
	}
	else{
		let jogo = JSON.parse(event.data);
		atualizarJogo(jogo)
		const som_movimento= new Audio('./sons/move-check.mp3');
		som_movimento.volume = 1;
		som_movimento.play();
	}	  
}

function moverPeca(celulaOrigem,celula){
	if (celulaOrigem && ( celulaOrigem.querySelector('.container-peca') 
		||celulaOrigem.querySelector('.container-bloco') ) ) {
		
		let mensagem = {
			"nomeDeUsuario":nomeDeUsuario,
			"idPartida":idPartida,
			"acao":"movimento",
			"idOrigem":celulaOrigem.id,
			"idDestino":celula.id,"magia":{}
		};
		
		if(socket.readyState==WebSocket.OPEN){
			enviarMensagem(mensagem,socket)
		}
			 	
	}
}

export {moverPeca}