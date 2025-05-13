package modelos;

public class Peca{
	public String nomeDaPeca;
	public String tipoDaPeca;
	public int manaDaPeca;
	public String donoOriginalDaPeca;
	public String donoTemporarioDaPeca;
	public int numeroDeTurnosDePosseTemporaria;
	public int colunaDaPeca;
	public int linhaDaPeca;
	public int distanciaDeLocomocao;
	
	public Peca(String nomeDaPeca, String tipoDaPeca, String donoOriginalDaPeca, String donoTemporarioDaPeca, int colunaDaPeca, int linhaDaPeca){
		this.nomeDaPeca=nomeDaPeca;
		this.tipoDaPeca=tipoDaPeca;
		this.manaDaPeca= 1;
		this.donoOriginalDaPeca=donoOriginalDaPeca;
		this.donoTemporarioDaPeca = donoTemporarioDaPeca;
		this.numeroDeTurnosDePosseTemporaria = 0;
		this.colunaDaPeca = colunaDaPeca;
		this.linhaDaPeca  = linhaDaPeca;
		this.distanciaDeLocomocao = 1;
		
	}
}
