package modelos;

public class PartidaDTO {
    public String usuario1;
    public String usuario2;
    public String id;

    public PartidaDTO(Partida partida) {
        this.usuario1 = partida.usuario1;
        this.usuario2 = partida.usuario2;
        this.id = partida.id;
    }
}