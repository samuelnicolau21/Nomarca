package modelos;

public class Jogo {
	public String mensagem;
	public String[] listaDeNomes1 = {"materia1","energia1","tempo1","mente1","espaco1"};
	public String[] listaDeNomes2 = {"materia2","energia2","tempo2","mente2","espaco2"};
	public String jogador1;
	public String jogador2;
	public Peca[] pecasJogador1;
	public Peca[]  pecasJogador2;
	public int contadorDeTurnos;
	public String jogadorDoTurno;
	public int acoesDisponiveisJogadorDoTurno;
	public int acoesDoJogador1PorTurno;
	public int acoesDoJogador2PorTurno;
	public int quantidadeDePontosJogador1;
	public int quantidadeDePontosJogador2;
	public Peca [][] tabuleiro;
	public String statusDoJogo = "iniciado";
	public int quantidadeDeManaParaMoverMago;
	public int quantidadeDeCasasDoMovimento;
	public int quantidadeDeManaGanhoNoFimDoTurno;
	
	public Jogo(String jogador1, String jogador2){
		this.jogador1 = jogador1;
		this.jogador2 = jogador2;
		this.jogadorDoTurno= jogador1;
		this.acoesDisponiveisJogadorDoTurno=1;
		this.quantidadeDeManaParaMoverMago=1;
		this.quantidadeDeCasasDoMovimento=1;
		this.quantidadeDeManaGanhoNoFimDoTurno=1;
		this.acoesDoJogador1PorTurno=1;
		this.acoesDoJogador2PorTurno=1;
		this.contadorDeTurnos=1;
		this.quantidadeDePontosJogador1= 0;
		this.quantidadeDePontosJogador2= 0;
		this.pecasJogador1 = new Peca[5]; 
		this.pecasJogador2 = new Peca[5];
		this.tabuleiro = new Peca[9][9];
		
		
		
		
		for (int i=0;i<5;i++) {
			this.pecasJogador1[i] = new Peca(listaDeNomes1[i], this.jogador1,this.jogador1,2+i,0);
			this.pecasJogador2[i] = new Peca(listaDeNomes2[i], this.jogador2,this.jogador2,2+i,8);
		}
		
		for (int i=0;i<5;i++) {
			this.tabuleiro[this.pecasJogador1[i].linhaDaPeca][this.pecasJogador1[i].colunaDaPeca]=this.pecasJogador1[i];
			this.tabuleiro[this.pecasJogador2[i].linhaDaPeca][this.pecasJogador2[i].colunaDaPeca]=this.pecasJogador2[i];			
		}
		
		/*for (int i=0;i<9;i++){
			for(int j=0;j<9;j++){
				if(this.tabuleiro[i][j]!=null){
					System.out.println("nome:"+tabuleiro[i][j].nomeDaPeca+" dono temporario da peca:"
							+ tabuleiro[i][j].donoTemporarioDaPeca + " linha:"
							+ tabuleiro[i][j].linhaDaPeca + " coluna:"
							+ tabuleiro[i][j].colunaDaPeca
							+" quantidade de mana da peca:"+ tabuleiro[i][j].manaDaPeca);
				}
			}
			
		}
		System.out.println("jogador do turno: "+ this.jogadorDoTurno);
		System.out.println("Quantida de mana para mover mago: "+ this.quantidadeDeManaParaMoverMago);
		*/
	}
}
