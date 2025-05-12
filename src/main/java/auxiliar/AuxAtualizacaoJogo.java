package auxiliar;

import modelos.Jogo;
import modelos.MensagemJogada;
import modelos.Peca;

public class AuxAtualizacaoJogo {
	public static void reduzAcoesJogadorDoTurno(MensagemJogada joagada,  Jogo jogo) {
		if(jogo.jogador1.equals(jogo.jogadorDoTurno)) {
			if(jogo.acoesDisponiveisJogadorDoTurno>0) {
				jogo.acoesDisponiveisJogadorDoTurno--;
			}
			if(jogo.acoesDisponiveisJogadorDoTurno==0) {
				jogo.jogadorDoTurno=jogo.jogador2;
				jogo.acoesDisponiveisJogadorDoTurno=jogo.acoesDoJogador2PorTurno;
			}
		}
		else {
			if(jogo.acoesDisponiveisJogadorDoTurno>0) {
				jogo.acoesDisponiveisJogadorDoTurno--;
			}
			if(jogo.acoesDisponiveisJogadorDoTurno==0) {
				jogo.jogadorDoTurno=jogo.jogador1;
				jogo.acoesDisponiveisJogadorDoTurno=jogo.acoesDoJogador1PorTurno;
			}
		}
	}
	
	public static void reduzManaPecaJogada(MensagemJogada jogada, Jogo jogo) {
		jogo.tabuleiro[AuxVerificaJogada.localPeloId(jogada.idOrigem).linha][AuxVerificaJogada.localPeloId(jogada.idOrigem).coluna].manaDaPeca--;
	}
	
	public static void atualizaPosicaoDaPecaJogada(MensagemJogada jogada, Jogo jogo){
		Peca peca=jogo.tabuleiro[AuxVerificaJogada.localPeloId(jogada.idOrigem).linha][AuxVerificaJogada.localPeloId(jogada.idOrigem).coluna];
		jogo.tabuleiro[AuxVerificaJogada.localPeloId(jogada.idDestino).linha][AuxVerificaJogada.localPeloId(jogada.idDestino).coluna]=peca;
		jogo.tabuleiro[AuxVerificaJogada.localPeloId(jogada.idOrigem).linha][AuxVerificaJogada.localPeloId(jogada.idOrigem).coluna]=null;
		
	}
	public static void adicionaManaAsOutrasPecas(MensagemJogada jogada, Jogo jogo) {
		Peca peca = jogo.tabuleiro[AuxVerificaJogada.localPeloId(jogada.idOrigem).linha][AuxVerificaJogada.localPeloId(jogada.idOrigem).coluna];
		if (jogada.nomeDeUsuario.equals(jogo.jogador1)){
			int tam = jogo.pecasJogador1.length;
			for (int i = 0; i<tam ; i++) {
				if(jogo.pecasJogador1[i]!=peca){
					jogo.pecasJogador1[i].manaDaPeca+=jogo.acoesDoJogador1PorTurno;
				}
			}
		}
		else if(jogada.nomeDeUsuario.equals(jogo.jogador2)){
			int tam = jogo.pecasJogador2.length;
			for (int i = 0; i<tam ; i++) {
				if(jogo.pecasJogador2[i]!=peca){
					jogo.pecasJogador2[i].manaDaPeca+=jogo.acoesDoJogador2PorTurno;
				}
			}
		}
	}
}
