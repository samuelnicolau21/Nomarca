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
			//AuxAtualizacaoJogo.adicionaManaAsOutrasPecas(jogada,jogo);
			AuxAtualizacaoJogo.atualizaPosicaoDaPecaJogada(jogada,jogo);
			AuxAtualizacaoJogo.reduzAcoesJogadorDoTurno(jogada,jogo);
			AuxAtualizacaoJogo.contabilizaPontucao(jogada, jogo);
			
				
			System.out.println("movimento válido");
			jogo.mensagem="movimento válido";
			return jogo;
			
		}

		else if(AuxVerificaJogada.verificaSeEdicaoEhValida(jogo, jogada)){
			//AuxAtualizacaoJogo.adicionaManaAsOutrasPecas(jogada,jogo);
			AuxAtualizacaoJogo.reduzAcoesJogadorDoTurno(jogada,jogo);
			AuxAtualizacaoJogo.contabilizaPontucao(jogada, jogo);
			System.out.println("edição válida");
			jogo.mensagem="edição válida";
			return jogo;
			
		}
		
		System.out.println("edição inválida");
		jogo.mensagem="edição inválida";
		return jogo;
	}
	
}
