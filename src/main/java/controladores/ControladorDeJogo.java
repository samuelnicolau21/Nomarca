package controladores;
import jakarta.websocket.*;
import modelos.Sessoes;
import jakarta.websocket.server.ServerEndpoint;
import jakarta.websocket.server.PathParam;

import java.io.IOException;

import com.google.gson.Gson;
import modelos.Partidas;
import modelos.SessaoModoStatus;
import modelos.MensagemJogada;
import modelos.Jogos;
import modelos.Jogo;
import servicos.ServicoDeProcessamentoDeJogada;

@ServerEndpoint("/controladorDeJogo/{nomeDeUsuario}/{idPartida}")
public class ControladorDeJogo {
	
	@OnOpen
	public void inserirSessaoDoUsuario(Session sessao, @PathParam("nomeDeUsuario") String nomeDeUsuario) {
	    if (Sessoes.sessoes.containsKey(nomeDeUsuario)) {
	        try {Sessoes.sessoes.get(nomeDeUsuario).sessao.close();}
	        catch (IOException e){e.printStackTrace();}
	        Sessoes.sessoes.remove(nomeDeUsuario);
	    }
	    Sessoes.sessoes.put(nomeDeUsuario, new SessaoModoStatus(sessao, "pvp", "pareado"));
	}
	
    @OnMessage
    public void enviarMensagem(@PathParam("nomeDeUsuario") String nomeDeUsuario, String mensagem) {
    	Gson gson = new Gson();
    	System.out.println("Recebido JSON: " + mensagem);
        MensagemJogada mensagemJogada = gson.fromJson(mensagem, MensagemJogada.class);
        
        if(Sessoes.sessoes.containsKey(nomeDeUsuario)) {
    		ServicoDeProcessamentoDeJogada servico = new ServicoDeProcessamentoDeJogada();
    		Jogo jogo = servico.processarJogada( mensagemJogada , Jogos.jogos.get(mensagemJogada.idPartida));
    		String resposta = gson.toJson(jogo);
    		if(jogo.mensagem.equals("movimento inválido")){
    			try {Sessoes.sessoes.get(nomeDeUsuario).sessao.getBasicRemote().sendText("movimento inválido");
    				 jogo.mensagem="";}
    			catch(IOException e){e.printStackTrace();}
    		}
    		
    		else{
    			try {
    			Sessoes.sessoes.get(Partidas.partidas.get(mensagemJogada.idPartida).usuario1).sessao.getBasicRemote().sendText(resposta);
    			Sessoes.sessoes.get(Partidas.partidas.get(mensagemJogada.idPartida).usuario2).sessao.getBasicRemote().sendText(resposta);
            	}
                catch (IOException e) {e.printStackTrace();}
    		}
        		
    	}
    	else {
    		System.out.println("Faça login novamente");
    	}
    	
    }
    
    @OnError
    public void onError(Session session, Throwable throwable) {
        System.err.println("Erro na conexão " + session.getId() + ": " + throwable.getMessage());
    }
}