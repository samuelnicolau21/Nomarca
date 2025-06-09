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
        String url = "jdbc:postgresql://VaggJuE9Xr3qlFNGT312Js2LzMy6rFIE@dpg-d133o8juibrs73fpmb00-a.ohio-postgres.render.com:5432/Arcana";
        String user = "arcana_user";
        String password = "Afta1234.";
        Connection conn = DriverManager.getConnection(url, user, password);
        System.out.println("Conexão estabelecida com sucesso!");
        return conn;
    }
}