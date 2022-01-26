package floresnataren.duenios.repositorio;

import org.springframework.data.repository.CrudRepository;
import floresnataren.duenios.modelo.Duenio;

import java.util.List;

public interface DuenioRepository extends CrudRepository <Duenio, Integer> {
    List<Duenio> findAll();
    List<Duenio> findDuenioByDireccion(String direccion);
    Duenio findByIdDuenio(int idDuenio);
    List<Duenio>findAllByTelefono(String telefono);
    Duenio save(Duenio duenio);
    void delete(Duenio duenio);
}
