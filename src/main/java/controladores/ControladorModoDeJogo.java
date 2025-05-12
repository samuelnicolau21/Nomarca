package controladores;
import jakarta.websocket.*;
import modelos.Sessoes;
import jakarta.websocket.server.ServerEndpoint;
import jakarta.websocket.server.PathParam;

import java.io.IOException;

import com.google.gson.Gson;
import modelos.MensagemModoDeJogo;
import modelos.Partidas;
import servicos.ServicoDePareamentoDePartida;
import modelos.SessaoModoStatus;

@ServerEndpoint("/modoDeJogo/{nomeDeUsuario}")
public class ControladorModoDeJogo {
	
	@OnOpen
	public void inserirSessaoDoUsuario(Session sessao, @PathParam("nomeDeUsuario") String nomeDeUsuario) {
	    if (Sessoes.sessoes.containsKey(nomeDeUsuario)) {
	        try {Sessoes.sessoes.get(nomeDeUsuario).sessao.close();}
	        catch (IOException e){e.printStackTrace();}
	        Sessoes.sessoes.remove(nomeDeUsuario);
	    }
	    Sessoes.sessoes.put(nomeDeUsuario, new SessaoModoStatus(sessao, "", "nao pareado"));
	}
	
    @OnMessage
    public void enviarMensagem(@PathParam("nomeDeUsuario") String nomeDeUsuario, String mensagem) {
    	Gson gson = new Gson();
        MensagemModoDeJogo mensagemModoDeJogo = gson.fromJson(mensagem, MensagemModoDeJogo.class);
        String modo = mensagemModoDeJogo.modo;
    	
        if(Sessoes.sessoes.containsKey(nomeDeUsuario)) {
    		Sessoes.sessoes.get(nomeDeUsuario).modo=modo;
    		ServicoDePareamentoDePartida servico = new ServicoDePareamentoDePartida();
    		String resposta = servico.parear(nomeDeUsuario, modo);
    		
    		if(resposta.equals("")){
    			Session sessao1=Sessoes.sessoes.get(nomeDeUsuario).sessao;
    			try {sessao1.getBasicRemote().sendText("");} 
                catch (IOException e) {e.printStackTrace();}
    		}
    		
    		else if(!resposta.equals("")){
    			try {
    			Partidas.partidas.get(resposta).sessao1.getBasicRemote().sendText(resposta);
    			Partidas.partidas.get(resposta).sessao2.getBasicRemote().sendText(resposta);
            	}
                catch (IOException e) {e.printStackTrace();}
    		}
        		
    	}
    	else {
    		System.out.println("Faça login para só então poder escolher o modo de jogo");
    	}
    	
    }

    @OnClose
    public void fechar(){}
    
    @OnError
    public void onError(Session session, Throwable throwable) {
        System.err.println("Erro na conexão " + session.getId() + ": " + throwable.getMessage());
    }
}