import { enviarMensagem } from '../util/enviarMensagem.js';

function enviarAcao(acao,senha,socket){
	enviarMensagem({"acao": acao, "senha": senha}, socket);
}

export { enviarAcao };