package modelos;

public class Peca{
	public String nomeDaPeca;
	public int manaDaPeca;
	public String donoOriginalDaPeca;
	public String donoTemporarioDaPeca;
	public int numeroDeTurnosDePosseTemporaria;
	public int colunaDaPeca;
	public int linhaDaPeca;
	public int distanciaDeLocomocao;
	
	public Peca(String nomeDaPeca, String donoOriginalDaPeca, String donoTemporarioDaPeca, int colunaDaPeca, int linhaDaPeca){
		this.nomeDaPeca=nomeDaPeca;
		this.manaDaPeca= 1;
		this.donoOriginalDaPeca=donoOriginalDaPeca;
		this.donoTemporarioDaPeca = donoTemporarioDaPeca;
		this.numeroDeTurnosDePosseTemporaria = 0;
		this.colunaDaPeca = colunaDaPeca;
		this.linhaDaPeca  = linhaDaPeca;
		this.distanciaDeLocomocao = 1;
		
	}
}
