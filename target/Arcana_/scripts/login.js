import { enviarAcao } from './utilLogin/enviarAcao.js';
import { verificarRespostaDoServidor } from './utilLogin/verificarRespostaDoServidor.js';
import { avisarFechamento } from './utilLogin/avisarFechamento.js';
import { avisarErro } from './utilLogin/avisarErro.js';
import { configurarBotoes } from './utilLogin/configurarBotoes.js';

let socket;
let nomeDeUsuario;
function enviarLogin(acao) {
	nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
	const senha = document.getElementById("senha").value;
	if (nomeDeUsuario.trim() && senha.trim()) {
        sessionStorage.setItem("nomeDeUsuario", nomeDeUsuario);
		socket = new WebSocket(`ws://localhost:8080/Arcana_/login/${nomeDeUsuario}`);
		socket.onopen = () => enviarAcao(acao,senha,socket);
		socket.onmessage = (event) => verificarRespostaDoServidor(event);
		socket.onclose = (event) => avisarFechamento(event);
        socket.onerror = (error) => avisarErro(error);	
    } 
	else {alert("Por favor, digite um nome de usuário e senha.");}	
}
configurarBotoes();
export {enviarLogin};