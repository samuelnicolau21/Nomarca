package auxiliar;
import modelos.Jogo;
import modelos.MensagemJogada;
import modelos.LinhaColuna;
import modelos.Peca;
import java.lang.Math;

public class AuxVerificaJogada {
	
	public static LinhaColuna localPeloId(String id) {
		String id_ = id.replace("celula-", "");
		char l=id_.charAt(0);
		char c=id_.charAt(1);
		int linha= Character.getNumericValue(l);
		int coluna=Character.getNumericValue(c);
		return new LinhaColuna(linha,coluna);
		
	}
	
	public static Peca pecaAPartirDoLocal(Jogo jogo, MensagemJogada jogada) {
		return jogo.tabuleiro[localPeloId(jogada.idOrigem).linha][localPeloId(jogada.idOrigem).coluna];
	}
		
	public static boolean movimentoDentroDoAlcancePermitido(LinhaColuna origem, LinhaColuna destino, Jogo jogo) {
		if(Math.abs(origem.linha - destino.linha) <=jogo.quantidadeDeCasasDoMovimento 
		   && Math.abs(origem.coluna - destino.coluna) <=jogo.quantidadeDeCasasDoMovimento) {
			return true;
		}
		
		return false;
	}
	public static boolean jogadaDentroDoTabuleiro(MensagemJogada jogada) {
		if(localPeloId(jogada.idDestino).linha<=8
			&& localPeloId(jogada.idDestino).linha>=0
			&& localPeloId(jogada.idDestino).coluna<=8
			&& localPeloId(jogada.idDestino).coluna>=0) {
			return true;
		}
		return false;
	}
	public static boolean jogadorDaVezEhODonoOriginalDaPeca(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).donoOriginalDaPeca.equals(jogada.nomeDeUsuario)||
		   pecaAPartirDoLocal(jogo, jogada).donoOriginalDaPeca.equals("ambos")) {
			return true;
		}
		System.out.println("jogador da vez não eh o dono original da peça");
		return false;
	}
	public static boolean jogadorDaVezEhODonoTemporarioDaPeca(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).donoTemporarioDaPeca.equals(jogada.nomeDeUsuario)||
		   pecaAPartirDoLocal(jogo, jogada).donoTemporarioDaPeca.equals("ambos")) {
			return true;
		}
		System.out.println("jogador da vez não eh o dono temporario da peça");
		return false;
	}
	public static boolean pecaAindaSobControleDoDonoTemporario(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).numeroDeTurnosDePosseTemporaria>0){
			return true;
		}
		System.out.println("peca nao está mais sob o controle do dono temporario");
		return false;
	}
	public static boolean pecaTemManaSuficienteParaSeMover(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).manaDaPeca>=jogo.quantidadeDeManaParaMoverMago ||
		   pecaAPartirDoLocal(jogo, jogada).nomeDaPeca.equals("bloco")) {
			return true;
		}
		return false;
	}
	
	public static boolean casaDeDestinoVazia(Jogo jogo, MensagemJogada jogada) {
		if(jogo.tabuleiro[localPeloId(jogada.idDestino).linha][localPeloId(jogada.idDestino).coluna]==null){
			return true;
		}
		return false;
	}
	
	public static boolean casaDeDestinoTemUmBloco(Jogo jogo, MensagemJogada jogada) {
		if (jogo.tabuleiro[localPeloId(jogada.idDestino).linha][localPeloId(jogada.idDestino).coluna].nomeDaPeca.equals("bloco")) {
			return true;
		}
		return false;
		
	}
	
	public static boolean casaDeDestinoTemPecaDoRival(Jogo jogo, MensagemJogada jogada) {
		if(jogo.tabuleiro[localPeloId(jogada.idDestino).linha][localPeloId(jogada.idDestino).coluna].donoOriginalDaPeca.equals(jogo.jogadorDoTurno)
			|| jogo.tabuleiro[localPeloId(jogada.idOrigem).linha][localPeloId(jogada.idOrigem).coluna].donoOriginalDaPeca.equals("ambos")
			|| jogo.tabuleiro[localPeloId(jogada.idDestino).linha][localPeloId(jogada.idDestino).coluna].donoOriginalDaPeca.equals("ambos")) {
			return false;
		}
		
		return true;
	}
	
	public static boolean casaDeDestinoValida(Jogo jogo, MensagemJogada jogada) {
		if(casaDeDestinoVazia(jogo, jogada)||casaDeDestinoTemPecaDoRival(jogo, jogada)) {
			return true;
		}
		
		return false;
	}
	public static boolean movimentoOrtogonal(Jogo jogo, MensagemJogada jogada) {
		if(localPeloId(jogada.idOrigem).linha == localPeloId(jogada.idDestino).linha
		  ||localPeloId(jogada.idOrigem).coluna == localPeloId(jogada.idDestino).coluna) {
			return true;
		}
		return false;
	}
	
	public static boolean movimentoDeBlocoValido(Jogo jogo, MensagemJogada jogada) {
		if(jogada.nomeDeUsuario.equals(jogo.jogador1) 
		   && jogo.permitidoMoverBloco
		   && pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("bloco")){
			for (int i=0;i<jogo.pecasJogador1.length;i++){
				if(jogo.pecasJogador1[i].nomeDaPeca.equals("materia1")
				   && jogo.pecasJogador1[i].manaDaPeca>=jogo.quantidadeDeManaParaMoverMago) {
				   jogo.pecasJogador1[i].manaDaPeca = jogo.pecasJogador1[i].manaDaPeca - jogo.quantidadeDeManaParaMoverMago - jogo.quantidadeDeManaGanhoNoFimDoTurno;
				   System.out.println("mana da materia 1:"+ jogo.pecasJogador1[i].manaDaPeca);
				   return true;
				}
			}
			return false;
		}
		else if (jogo.permitidoMoverBloco 
				&& pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("bloco")) {
			for (int i=0;i<jogo.pecasJogador2.length;i++){
				if(jogo.pecasJogador2[i].nomeDaPeca.equals("materia2")
				   && jogo.pecasJogador2[i].manaDaPeca>=jogo.quantidadeDeManaParaMoverMago) {
				   jogo.pecasJogador2[i].manaDaPeca= jogo.pecasJogador2[i].manaDaPeca - jogo.quantidadeDeManaParaMoverMago - jogo.quantidadeDeManaGanhoNoFimDoTurno;
				   System.out.println("mana da materia 2:"+ jogo.pecasJogador2[i].manaDaPeca);
				   return true;
				}
			}
			return false;
		}
		
		
		return true;
	}
	
	private static boolean seTemManaParaAlterarRegraFazAlteracao(Jogo jogo, MensagemJogada jogada) {
		if(jogada.magia.regra.equals("acao1") &&
		   pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoAcao1(jogo, jogada) &&
		   pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("tempo1")) {
		   pecaAPartirDoLocal(jogo,jogada).manaDaPeca-= custoAcao1(jogo, jogada);
		   jogo.acoesDoJogador1PorTurno=jogada.magia.novoValor;
		   return true;
		}
		else if(jogada.magia.regra.equals("acao2") &&
				   pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoAcao2(jogo, jogada) &&
				   pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("tempo2")) {
				   pecaAPartirDoLocal(jogo,jogada).manaDaPeca-= custoAcao2(jogo, jogada);
				   jogo.acoesDoJogador2PorTurno=jogada.magia.novoValor;
				   return true;
				}
		else if(jogada.magia.regra.equals("mana1") && 
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoMana1(jogo, jogada)  &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("energia1")) {
			pecaAPartirDoLocal(jogo, jogada).manaDaPeca-=custoMana1(jogo, jogada);
			jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador1=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("mana2") && 
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoMana2(jogo, jogada)  &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("energia2")) {
			pecaAPartirDoLocal(jogo, jogada).manaDaPeca-=custoMana2(jogo, jogada);
			jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador2=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("locomocao1") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoLocomocao1(jogo, jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("espaco1")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca-=custoLocomocao1(jogo, jogada);
			jogo.quantidadeDeCasasDoMovimentoJogador1=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("locomocao2") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoLocomocao2(jogo, jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("espaco2")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca-=custoLocomocao2(jogo, jogada);
			jogo.quantidadeDeCasasDoMovimentoJogador2=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("locomocaoBloco1") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoLocomocaoBloco1(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("materia1")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca-=custoLocomocaoBloco1(jogo,jogada);
			System.out.println("novoValor:"+jogada.magia.novoValor);
			jogo.quantidadeDeCasasDoMovimentoBlocoJogador1=jogada.magia.novoValor;
			System.out.println("jogador 1quantidade de casas que o bloco pode ser movido pós "
					+ "alteração:"+jogo.quantidadeDeCasasDoMovimentoBlocoJogador1);
			return true;
		}
		else if(jogada.magia.regra.equals("locomocaoBloco2") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoLocomocaoBloco2(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("materia2")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca-=custoLocomocaoBloco2(jogo,jogada);
			jogo.quantidadeDeCasasDoMovimentoBlocoJogador2=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("controle1") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoControle1(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("mente1")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca -= custoControle1(jogo,jogada);
			jogo.quantidadeDeTurnosDeControleInimigoJogador1=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("controle2") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoControle2(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("mente2")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca -= custoControle2(jogo,jogada);
			jogo.quantidadeDeTurnosDeControleInimigoJogador2=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("alcance1") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoAlcance1(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("mente1")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca -= custoAlcance1(jogo,jogada);
			jogo.alcanceDaMenteJogador1=jogada.magia.novoValor;
			return true;
		}
		else if(jogada.magia.regra.equals("alcance2") &&
				pecaAPartirDoLocal(jogo,jogada).manaDaPeca >= custoAlcance2(jogo,jogada) &&
				pecaAPartirDoLocal(jogo,jogada).nomeDaPeca.equals("mente2")) {
			pecaAPartirDoLocal(jogo,jogada).manaDaPeca -= custoAlcance2(jogo,jogada);
			jogo.alcanceDaMenteJogador2=jogada.magia.novoValor;
			return true;
		}
		System.out.println("peça não tinha mana suficiente para efetuar a edição");
		return false;
	}
	
	public static boolean verificaSeMovimentoMagoEhValido(Jogo jogo, MensagemJogada jogada) {
		if(jogada.acao.equals("movimento")&&
		   jogo.statusDoJogo.equals("iniciado")&&
		   jogada.nomeDeUsuario.equals(jogo.jogadorDoTurno)&&
		   jogo.acoesDisponiveisJogadorDoTurno>0 &&
		   jogadaDentroDoTabuleiro(jogada) &&
		   (jogadorDaVezEhODonoOriginalDaPeca(jogo,jogada)||
		   ( jogadorDaVezEhODonoTemporarioDaPeca(jogo,jogada) && pecaAindaSobControleDoDonoTemporario(jogo,jogada) ) )&&
		   pecaTemManaSuficienteParaSeMover(jogo, jogada)&&
		   casaDeDestinoValida(jogo, jogada)&&
		   movimentoOrtogonal(jogo, jogada)&&
		   movimentoDentroDoAlcancePermitido(localPeloId(jogada.idOrigem),localPeloId(jogada.idDestino),jogo)&&
		   movimentoDeBlocoValido(jogo, jogada)) {
			return true;}
		jogo.mensagem="movimento inválido";
		return false;
		
	}

	public static boolean verificaSeMagiaLancadaEhValida(Jogo jogo, MensagemJogada jogada) {
		if (jogada.acao.equals("controlar")){}
		else if(jogada.acao.equals("permutar")){}
		else if(jogada.acao.equals("copiar")){}
		jogo.mensagem="movimento inválido";
		return false;
	}

	public static boolean verificaSeEdicaoEhValida(Jogo jogo, MensagemJogada jogada) {
		System.out.println("verificando se a edicao eh valida");
		if ( jogada.acao.equals("alteracao_regra") &&
			(jogadorDaVezEhODonoOriginalDaPeca(jogo,jogada)||
			( jogadorDaVezEhODonoTemporarioDaPeca(jogo,jogada) &&
			  pecaAindaSobControleDoDonoTemporario(jogo,jogada) ) )
			) {
			
			return seTemManaParaAlterarRegraFazAlteracao(jogo,jogada);
		}
		jogo.mensagem="movimento inválido";
		return false;
	}
	
	
	public static int custoAcao1(Jogo jogo, MensagemJogada jogada){
		return 5*Math.abs(jogo.acoesDoJogador1PorTurno-jogada.magia.novoValor);
	}
	public static int custoMana1(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador1-jogada.magia.novoValor);
	}
	public static int custoLocomocao1(Jogo jogo, MensagemJogada jogada) {
		return 2*Math.abs(jogo.quantidadeDeCasasDoMovimentoJogador1-jogada.magia.novoValor);
	}
	public static int custoLocomocaoBloco1(Jogo jogo, MensagemJogada jogada) {
		return 1*Math.abs(jogo.quantidadeDeCasasDoMovimentoBlocoJogador1-jogada.magia.novoValor);
	}
	public static int custoControle1(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.quantidadeDeTurnosDeControleInimigoJogador1-jogada.magia.novoValor);
	}
	public static int custoAlcance1(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.alcanceDaMenteJogador1-jogada.magia.novoValor);
	}
	public static int custoAcao2(Jogo jogo, MensagemJogada jogada){
		return 5*Math.abs(jogo.acoesDoJogador2PorTurno-jogada.magia.novoValor);
	}
	public static int custoMana2(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador2-jogada.magia.novoValor);
	}
	public static int custoLocomocao2(Jogo jogo, MensagemJogada jogada) {
		return 2*Math.abs(jogo.quantidadeDeCasasDoMovimentoJogador2-jogada.magia.novoValor);
	}
	public static int custoLocomocaoBloco2(Jogo jogo, MensagemJogada jogada) {
		return 1*Math.abs(jogo.quantidadeDeCasasDoMovimentoBlocoJogador2-jogada.magia.novoValor);
	}
	public static int custoControle2(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.quantidadeDeTurnosDeControleInimigoJogador2-jogada.magia.novoValor);
	}
	public static int custoAlcance2(Jogo jogo, MensagemJogada jogada) {
		return 3*Math.abs(jogo.alcanceDaMenteJogador2-jogada.magia.novoValor);
	}

	

}


