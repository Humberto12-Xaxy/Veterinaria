package maldonadourbina.medicamentos.model;

public class MedicamentoMascota extends Medicamento{
    private Mascota[] mascotas;

    public MedicamentoMascota() {
    }

    public MedicamentoMascota(Mascota[] mascotas) {
        this.mascotas = mascotas;
    }

    public MedicamentoMascota(int idMedicamento, int codigo, String nombre, String fechaCaducidad, String sustanciaActiva, Mascota[] mascotas) {
        super(idMedicamento, codigo, nombre, fechaCaducidad, sustanciaActiva);
        this.mascotas = mascotas;
    }

    public MedicamentoMascota(int idMedicamento, int codigo, String nombre, String fechaCaducidad, String sustanciaActiva){
        super(idMedicamento, codigo, nombre, fechaCaducidad, sustanciaActiva);
    }

    public Mascota[] getMascotas() {
        return mascotas;
    }

    public void setMascotas(Mascota[] mascotas) {
        this.mascotas = mascotas;
    }
}