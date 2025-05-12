package repositorios;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import modelos.Usuario;

public class RepositorioDeUsuarios {
	
	public RepositorioDeUsuarios() {
		
	}
	
    public Usuario consultarPorNome(String nomeDeUsuario, Connection conn) {
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
        	
            String sql = "SELECT * FROM usuarios where nome = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, nomeDeUsuario); 
            rs = pstmt.executeQuery();

            if (rs.next()){
            	int id = rs.getInt("id");
            	String nome = rs.getString("nome");
            	String senha = rs.getString("senha");
            	String tipoConta= rs.getString("tipo_conta");
            	Usuario usuario= new Usuario(nome,senha,tipoConta);
            	System.out.println("id: " + id + ", nome: " + nome
            		+ ", senha: " + senha+ ", tipo de conta: " + tipoConta);
                
            	return usuario;
            }
            else {
            	return null;
            }
            
        } 
        catch (SQLException e) {
            e.printStackTrace();
        } 
        finally {
            
            try {
                if (rs != null) rs.close();
                if (pstmt != null) pstmt.close();
            } 
            
            catch (SQLException e) {
                e.printStackTrace();
            }
            
        }
		return null;
    }
	
    public Usuario inserirUsuario(String nomeDeUsuario, String senha, Connection conn) {
    	String tipo_de_conta = "jogador";
        PreparedStatement pstmt = null;
        int numeroDeLinhasAfetadas = 0;

        try {
        	
            String sql = "INSERT INTO usuarios (nome, senha, tipo_conta) "
            		+ "VALUES (?,?,?)";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, nomeDeUsuario);
            pstmt.setString(2, senha);
            pstmt.setString(3, tipo_de_conta);
            numeroDeLinhasAfetadas = pstmt.executeUpdate();
            
            Usuario usuario=consultarPorNome(nomeDeUsuario, conn);
            
            if(numeroDeLinhasAfetadas >=1){
            	return usuario;
            }
            else {
            	return null;
            }
            
        } 
        catch (SQLException e) {
            e.printStackTrace();
        } 
        finally {
            
            try {
                if (pstmt != null) pstmt.close();
            } 
            
            catch (SQLException e) {
                e.printStackTrace();
            }
            
        }
		return null;
    }
	

}


