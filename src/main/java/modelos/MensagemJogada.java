package modelos;


public class MensagemJogada {
	public String nomeDeUsuario;
	public String idPartida;
	public String acao;
	public String idOrigem;
	public String idDestino;
	public Magia magia;
	
	public MensagemJogada(String nomeDeUsuario, String idPartida, String acao, String idOrigem, String idDestino, Magia magia){
		this.nomeDeUsuario = nomeDeUsuario;
		this.idPartida = idPartida;
		this.acao = acao;
		this.idOrigem = idOrigem;
		this.idDestino = idDestino;
		this.magia = magia;
	}
}
