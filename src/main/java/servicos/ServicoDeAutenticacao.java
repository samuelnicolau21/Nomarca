package servicos;
import configuracoes.ConfigJDBC;
import java.sql.Connection;
import java.sql.SQLException;

import repositorios.RepositorioDeUsuarios;

public class ServicoDeAutenticacao {
	public ServicoDeAutenticacao(){}
	public String autenticaUsuario(String nomeDeUsuario, String senha, String acao){
		
		ConfigJDBC config = new ConfigJDBC();
		Connection conn;
		
		try {
			conn = config.getConexao();
		} 
		catch (SQLException e) {
			e.printStackTrace();
			return "";
		}
		
		RepositorioDeUsuarios rep = new RepositorioDeUsuarios();
		if(acao.equals("Logar")){
			
			if(rep.consultarPorNome(nomeDeUsuario,conn)!=null){
				
				String senhaCadastrada = rep.consultarPorNome(nomeDeUsuario,conn).senha;
				
				if(senhaCadastrada.equals(senha)){return "Login ok";}
				else {return "Senha incorreta";}
			}
			
			else {return "Nome de usuário não encontrado";}	
		}
		
		else if(acao.equals("Cadastrar")){
				
			if(!senha.equals("")){
				
				if(rep.inserirUsuario(nomeDeUsuario, senha, conn).nome.equals(nomeDeUsuario)){return "Cadastro ok";}
				else {return "Já existe um usuário com esse nome de usuário";}
			}
			
			else {return "Digite uma senha válida";}
		}
			
		else{return "Já existe um usuário com este nome de usuário. Por favor, escolha outro nome de usuário.";}
		
	
	}
	

};
