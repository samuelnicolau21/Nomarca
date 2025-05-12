package configuracoes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConfigJDBC {
	
	public ConfigJDBC(){}
	
    public Connection getConexao() throws SQLException {
    	 
        try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
        String url = "jdbc:postgresql://localhost:5432/Arcana";
        String user = "postgres";
        String password = "Afta1234.";
        Connection conn = DriverManager.getConnection(url, user, password);
        System.out.println("Conexão estabelecida com sucesso!");
        return conn;
    }
}
