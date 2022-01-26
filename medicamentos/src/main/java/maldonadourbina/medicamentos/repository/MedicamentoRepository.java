package maldonadourbina.medicamentos.repository;
import org.springframework.data.repository.CrudRepository;
import maldonadourbina.medicamentos.model.Medicamento;

import java.util.List;

public interface MedicamentoRepository extends CrudRepository <Medicamento, Integer> {
    List<Medicamento> findAll();
    List<Medicamento> findAllBySustanciaActiva(String sustanciaActiva);
    Medicamento findByIdMedicamento(int idMedicamento);
    List<Medicamento>findAllByNombre(String nombre);
    Medicamento save(Medicamento medicamento);
    void delete(Medicamento medicamento);
}