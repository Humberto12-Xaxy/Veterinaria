package rest.Modelo;
import javax.persistence.*;

@Entity
public class Mascota {

    @Id
    private int idMascota;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "idDuenio")
    private int idDuenio;

    @Column(name = "idCita")
    private int idCita;

    @Column(name = "idMedicamento")
    private int idMedicamento;

    @Column(name = "fechaIngreso")
    private String fechaIngreso;

    @Column(name = "razon")
    private String razon;

    public Mascota(){

    }

    public Mascota(int idMascota, String nombre, String tipo, int idDuenio, int idCita, int idMedicamento, String fechaIngreso, String razon) {
        this.idMascota = idMascota;
        this.nombre = nombre;
        this.tipo = tipo;
        this.idDuenio = idDuenio;
        this.idCita = idCita;
        this.idMedicamento=idMedicamento;
        this.fechaIngreso = fechaIngreso;
        this.razon = razon;
    }

    public int getIdMascota() {
        return idMascota;
    }

    public void setIdMascota(int idMascota) {
        this.idMascota = idMascota;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getIdDuenio() {
        return idDuenio;
    }

    public void setIdDuenio(int idDuenio) {
        this.idDuenio = idDuenio;
    }

    public int getIdCita() {
        return idCita;
    }

    public void setIdCita(int idCita) {
        this.idCita = idCita;
    }

    public int getIdMedicamento() {
        return idMedicamento;
    }

    public void setIdMedicamento(int idMedicamento) {
        this.idMedicamento = idMedicamento;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getRazon() {
        return razon;
    }

    public void setRazon(String razon) {
        this.razon = razon;
    }
}