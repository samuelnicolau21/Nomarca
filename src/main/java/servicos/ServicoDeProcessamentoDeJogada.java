package servicos;
import modelos.MensagemJogada;
import modelos.Jogo;
import auxiliar.AuxVerificaJogada;
import auxiliar.AuxAtualizacaoJogo;


public class ServicoDeProcessamentoDeJogada {
	
	public ServicoDeProcessamentoDeJogada(){}
	
	public Jogo processarJogada(MensagemJogada jogada, Jogo jogo) {
		

		if(AuxVerificaJogada.verificaSeMovimentoMagoEhValido(jogo, jogada)){
			
			AuxAtualizacaoJogo.reduzManaPecaJogada(jogada,jogo);
			AuxAtualizacaoJogo.adicionaManaAsOutrasPecas(jogada,jogo);
			AuxAtualizacaoJogo.atualizaPosicaoDaPecaJogada(jogada,jogo);
			AuxAtualizacaoJogo.reduzAcoesJogadorDoTurno(jogada,jogo);
				
			System.out.println("movimento validado pelo if de movimentoMago");
			jogo.mensagem="";
			return jogo;
			
		}
		else if(AuxVerificaJogada.verificaSeMagiaLancadaEhValida(jogo, jogada)) {

		}
		else if(AuxVerificaJogada.verificaSeEdicaoEhValida(jogo, jogada)){
			
		}
		
		System.out.println("movimento invalidado pelo if de movimentoMago");
		jogo.mensagem="movimento inválido";
		return jogo;
	}
	
}
