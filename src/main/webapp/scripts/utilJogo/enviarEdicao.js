import {getSocketDeEdicao, iniciarSocketDeEdicao } from './socketEdicao.js';
import {avisaEdicaoLegal} from './avisaEdicaoLegal.js';
import {avisaMovimentoIlegal} from './avisaMovimentoIlegal.js';
import {avisaMensagemNaoEnviada} from './avisaMensagemNaoEnviada.js';
import {enviarMensagem} from '../util/enviarMensagem.js';
import {iniciarSocketDeJogada, getSocketJogada} from './socketJogada.js';


function enviarEdicao(e) {
	if (e.target.classList.contains('numero-editavel') && e.key === 'Enter') {
		e.preventDefault();

		const novoValor = e.target.textContent.trim();
		if (!/^\d+$/.test(novoValor)) {
			e.target.textContent = e.target.dataset.original;
			avisaMovimentoIlegal();
			return;
		}

		const idPartida = sessionStorage.getItem("idPartida");
		const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");

		// Certifica que o socket está iniciado
		iniciarSocketDeJogada(nomeDeUsuario, idPartida);
		const socket = getSocketJogada();

		e.target.dataset.original = novoValor;
		avisaEdicaoLegal();

		const menu = document.querySelector('.menu-contexto');
		const celulaId = menu ? menu.dataset.celulaId : undefined;
		if (!celulaId) return;

		const paragrafoPai = e.target.closest('p');
		const idRegra = paragrafoPai.id || 'regra-desconhecida';

		const magia = {
			regra: idRegra,
			novoValor: parseInt(novoValor)
		};

		const mensagem = {
			nomeDeUsuario,
			idPartida,
			acao: "alteracao_regra",
			idOrigem: celulaId,
			idDestino: celulaId,
			magia
		};

		if (socket.readyState === WebSocket.OPEN) {
			console.log("Enviando edição de regra");
			enviarMensagem(mensagem, socket);
		} else {
			console.log("Erro ao enviar edição de regra");
			avisaMensagemNaoEnviada();
		}
	}
}
export{enviarEdicao};