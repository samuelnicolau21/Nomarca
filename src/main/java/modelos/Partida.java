package modelos;
import jakarta.websocket.Session;

public class Partida {
	public String id;
	public String usuario1;
	public String usuario2;
	public Session sessao1;
	public Session sessao2;
	
	public Partida(String usuario1, String usuario2, Session sessao1, Session sessao2) {
		this.usuario1=usuario1;
		this.usuario2=usuario2;
		this.sessao1=sessao1;
		this.sessao2=sessao2;
		this.id=usuario1+usuario2;
	}
}
