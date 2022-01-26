package gomezherrera.mascotas.repository;


import org.springframework.data.repository.CrudRepository;
import gomezherrera.mascotas.model.Mascota;

import java.util.List;

public interface MascotaRepository extends CrudRepository<Mascota, Integer> {
    List<Mascota> findAll();
    List<Mascota> findByIdDuenio(int idDuenio);
    List<Mascota> findByIdMedicamento(int idMedicamento);
    List<Mascota> findByTipo(String tipo);
    Mascota findByIdCita(int idCita);
    Mascota findByIdMascota(int idMascota);
    List<Mascota>findAllByNombre(String nombre);
    Mascota save(Mascota mascota);
    void delete(Mascota mascota);
}