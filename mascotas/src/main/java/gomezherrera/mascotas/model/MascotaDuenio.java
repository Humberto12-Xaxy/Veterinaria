package gomezherrera.mascotas.model;

public class MascotaDuenio extends Mascota {
    private  Duenio duenio;

    public MascotaDuenio() {
    }

    public MascotaDuenio(int idMascota, String nombre, String tipo, int idDuenio, int idCita, int idMedicamento, String fechaIngreso, String razon) {
        super(idMascota, nombre, tipo, idDuenio, idCita, idMedicamento, fechaIngreso, razon);
    }

    public MascotaDuenio(Duenio duenio) {
        this.duenio = duenio;
    }

    public MascotaDuenio(int idMascota, String nombre, String tipo, int idDuenio, int idCita, int idMedicamento, String fechaIngreso, String razon, Duenio duenio) {
        super(idMascota, nombre, tipo, idDuenio, idCita, idMedicamento, fechaIngreso, razon);
        this.duenio = duenio;
    }

    public Duenio getDuenio() {
        return duenio;
    }

    public void setDuenio(Duenio duenio) {
        this.duenio = duenio;
    }
}
