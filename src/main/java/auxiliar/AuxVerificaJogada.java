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
		return false;
	}
	public static boolean jogadorDaVezEhODonoTemporarioDaPeca(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).donoTemporarioDaPeca.equals(jogada.nomeDeUsuario)||
		   pecaAPartirDoLocal(jogo, jogada).donoTemporarioDaPeca.equals("ambos")) {
			return true;
		}
		
		return false;
	}
	public static boolean pecaAindaSobControleDoDonoTemporario(Jogo jogo, MensagemJogada jogada) {
		if(pecaAPartirDoLocal(jogo, jogada).numeroDeTurnosDePosseTemporaria>0){
			return true;
		}
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
		return false;
		
	}

	public static boolean verificaSeMagiaLancadaEhValida(Jogo jogo, MensagemJogada jogada) {
		if (jogada.acao.equals("controlar")) {}
		else if(jogada.acao.equals("permutar")){}
		else if(jogada.acao.equals("copiar")){}
		return false;
	}

	public static boolean verificaSeEdicaoEhValida(Jogo jogo, MensagemJogada jogada) {
		// TODO Auto-generated method stub
		return false;
	}
}


