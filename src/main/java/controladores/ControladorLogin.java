package controladores;

import java.io.IOException;
import jakarta.websocket.*;
import modelos.Sessoes;
import jakarta.websocket.server.ServerEndpoint;
import jakarta.websocket.server.PathParam;
import servicos.ServicoDeAutenticacao;
import com.google.gson.Gson; 
import modelos.MensagemLogin;
import modelos.SessaoModoStatus;

@ServerEndpoint("/login/{nomeDeUsuario}")
public class ControladorLogin {

    @OnOpen
    public void inserirSessaoDoUsuario(Session sessao,@PathParam("nomeDeUsuario") String nomeDeUsuario) {
    	SessaoModoStatus sms = new SessaoModoStatus(sessao, "", "nao pareado");
    	if(Sessoes.sessoes.containsKey(nomeDeUsuario)) {
    		try {    
 	            Sessoes.sessoes.get(nomeDeUsuario).sessao.close();
 	        } catch (IOException e) {
 	            e.printStackTrace();
 	        }
    		 Sessoes.sessoes.remove(nomeDeUsuario);
    	}
    	Sessoes.sessoes.put(nomeDeUsuario, sms);
    }

    @OnMessage   
	public void enviarMensagem(@PathParam("nomeDeUsuario") String nomeDeUsuario, String mensagem) {
    	Gson gson = new Gson();
        MensagemLogin mensagemLogin = gson.fromJson(mensagem, MensagemLogin.class);
        String acao = mensagemLogin.acao;
        String senha = mensagemLogin.senha;

    	ServicoDeAutenticacao servico = new ServicoDeAutenticacao();
    	String resposta = servico.autenticaUsuario(nomeDeUsuario,senha,acao);
    	
    	try {Sessoes.sessoes.get(nomeDeUsuario).sessao.getBasicRemote().sendText(resposta);} 
        catch (IOException e) {e.printStackTrace();}
    }

    
    @OnClose
    public void encerrarSessao(Session sessao, @PathParam("nomeDeUsuario") String nomeDeUsuario) {}
    
    @OnError
    public void onError(Session session, Throwable throwable) {
        System.err.println("Erro na conexão " + session.getId() + ": " + throwable.getMessage());
    }
}