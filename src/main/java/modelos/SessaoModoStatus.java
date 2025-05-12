package modelos;

import jakarta.websocket.Session;

public class SessaoModoStatus {
	public Session sessao;
	public String modo;
	public String status;
	
	public SessaoModoStatus(Session sessao, String modo, String status){
		this.sessao=sessao;
		this.modo=modo;
		this.status=status;
	}
}
