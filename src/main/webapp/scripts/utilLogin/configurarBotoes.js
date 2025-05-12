import { enviarLogin } from '../login.js';

function configurarBotoes(){
	document.getElementById("botaoLogar").addEventListener("click", function() {
	    this.disabled = true;
	    enviarLogin("Logar");
	});
	document.getElementById("botaoCadastrar").addEventListener("click", function() {
	    this.disabled = true;
	    enviarLogin("Cadastrar");
	});
}

export {configurarBotoes};