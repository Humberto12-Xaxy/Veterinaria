package rest.Modelo;

public class CitaMascota extends Cita{
    private Mascota mascota;

    public CitaMascota() {
    }

    public CitaMascota(int id, String fecha, String hora, String tipoServicio) {
        super(id, fecha, hora, tipoServicio);
    }

    public CitaMascota(Mascota mascota) {
        this.mascota = mascota;
    }

    public CitaMascota(int id, String fecha, String hora, String tipoServicio, Mascota mascota) {
        super(id, fecha, hora, tipoServicio);
        this.mascota = mascota;
    }

    public Mascota getMascota() {
        return mascota;
    }

    public void setMascota(Mascota mascota) {
        this.mascota = mascota;
    }
}
