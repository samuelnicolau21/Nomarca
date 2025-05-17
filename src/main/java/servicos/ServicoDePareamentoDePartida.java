package servicos;

import java.util.concurrent.atomic.AtomicReference;
import modelos.SessaoModoStatus;
import modelos.Sessoes;
import modelos.Jogos;
import modelos.Partida;
import modelos.Partidas;
import modelos.Jogo;

public class ServicoDePareamentoDePartida{
	public ServicoDePareamentoDePartida(){}
	
	public Partida parear(String nomeDeUsuario,String modo){
		AtomicReference<String> id_da_partida_criada = new AtomicReference<>("");
		
		Sessoes.sessoes.forEach((chave, valor) -> {
			if (!nomeDeUsuario.equals(chave)
				&& valor.modo.equals(modo)
				&& valor.status.equals("nao pareado")
				&& !Sessoes.sessoes.get(nomeDeUsuario).status.equals("pareado")){
				
				SessaoModoStatus sms = Sessoes.sessoes.get(nomeDeUsuario);
				sms.status="pareado";
				valor.status="pareado";
				Partida partida = new Partida(nomeDeUsuario, chave, sms.sessao, valor.sessao);
				Partidas.partidas.put(partida.id, partida);
				Jogos.jogos.put( partida.id, new Jogo(partida.usuario1,partida.usuario2) );
				id_da_partida_criada.set(partida.id);
			}
			
		});
		
		String id_partida = id_da_partida_criada.get();
		return Partidas.partidas.get(id_partida);

	}
}
