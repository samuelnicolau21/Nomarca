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
	public int quantidadeDeCasasDoMovimentoJogador1;
	public int quantidadeDeCasasDoMovimentoJogador2;
	public int quantidadeDeCasasDoMovimentoBlocoJogador1;
	public int quantidadeDeCasasDoMovimentoBlocoJogador2;
	public int quantidadeDeManaGanhoNoFimDoTurno;
	public int quantidadeDeManaGanhoNoFimDoTurnoJogador1;
	public int quantidadeDeManaGanhoNoFimDoTurnoJogador2;
	public int quantidadeDeTurnosDeControleInimigoJogador1;
	public int quantidadeDeTurnosDeControleInimigoJogador2;
	public int alcanceDaMenteJogador1;
	public int alcanceDaMenteJogador2;
	public boolean permitidoMoverBloco;
	
	public Jogo(String jogador1, String jogador2){
		this.jogador1 = jogador1;
		this.jogador2 = jogador2;
		this.jogadorDoTurno= jogador1;
		this.acoesDisponiveisJogadorDoTurno=1;
		this.quantidadeDeManaParaMoverMago=1;
		this.quantidadeDeCasasDoMovimento=1;
		this.quantidadeDeCasasDoMovimentoJogador1=1;
		this.quantidadeDeCasasDoMovimentoJogador2=1;
		this.quantidadeDeCasasDoMovimentoBlocoJogador1=0;
		this.quantidadeDeCasasDoMovimentoBlocoJogador2=0;
		this.quantidadeDeManaGanhoNoFimDoTurno=1;
		this.quantidadeDeManaGanhoNoFimDoTurnoJogador1=1;
		this.quantidadeDeManaGanhoNoFimDoTurnoJogador2=1;
		this.quantidadeDeTurnosDeControleInimigoJogador1=0;
		this.quantidadeDeTurnosDeControleInimigoJogador2=0;
		this.alcanceDaMenteJogador1=1;
		this.alcanceDaMenteJogador2=2;
		this.acoesDoJogador1PorTurno=1;
		this.acoesDoJogador2PorTurno=1;
		this.contadorDeTurnos=1;
		this.quantidadeDePontosJogador1= 0;
		this.quantidadeDePontosJogador2= 0;
		this.permitidoMoverBloco = true;
		this.pecasJogador1 = new Peca[5]; 
		this.pecasJogador2 = new Peca[5];
		this.tabuleiro = new Peca[9][9];
		
		//criando os Axionautas
		for (int i=0;i<5;i++) {
			this.pecasJogador1[i] = new Peca(listaDeNomes1[i],"Axionauta", this.jogador1,this.jogador1,2+i,0);
			this.pecasJogador2[i] = new Peca(listaDeNomes2[i],"Axionauta", this.jogador2,this.jogador2,2+i,8);
		}
		
		//criando e posicionando os blocos
		for (int i=0;i<3;i++) {
			for (int j=0;j<3;j++) {
				if(i+3==4 && j+3==4) {}
				else {this.tabuleiro[3+j][i+3]=new Peca("bloco","bloco","ambos","ambos",i+3,i+3);}
				
			}
		}
			
		//posicionando os axionautas
		for (int i=0;i<5;i++) {
			this.tabuleiro[this.pecasJogador1[i].linhaDaPeca][this.pecasJogador1[i].colunaDaPeca]=this.pecasJogador1[i];
			this.tabuleiro[this.pecasJogador2[i].linhaDaPeca][this.pecasJogador2[i].colunaDaPeca]=this.pecasJogador2[i];
			
		}
		
	}
}
