import { enviarMensagem } from '../util/enviarMensagem.js';

function configurarBotoes(socket) {
    document.getElementById("botaoPVP").addEventListener("click", function() {
        this.disabled = true;
		document.getElementById("botaoCPU").disabled= true;
        enviarMensagem({"modo":"PVP"}, socket);
    });
        
    document.getElementById("botaoCPU").addEventListener("click", function() {
        this.disabled = true;
		document.getElementById("botaoPVP").disabled= true;
        enviarMensagem({"modo":"CPU"}, socket);
    });
}

export { configurarBotoes };
