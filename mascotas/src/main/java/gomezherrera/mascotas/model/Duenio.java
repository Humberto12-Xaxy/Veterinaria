package gomezherrera.mascotas.model;

import javax.persistence.*;

@Entity
@Table (name="duenio")
public class Duenio {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idDuenio;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "telefono")
    private String  telefono;
    @Column(name = "direccion")
    private String direccion;


    public Duenio(){}

    public Duenio(int id, String nombre, String telefono, String direccion) {
        this.idDuenio = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    public int getIdDuenio() {
        return idDuenio;
    }

    public void setIdDuenio(int id) {
        this.idDuenio = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
