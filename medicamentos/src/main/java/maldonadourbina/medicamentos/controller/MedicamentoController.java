package maldonadourbina.medicamentos.controller;
import maldonadourbina.medicamentos.MedicamentosApplication;
import maldonadourbina.medicamentos.model.Mascota;
import maldonadourbina.medicamentos.model.MedicamentoMascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import maldonadourbina.medicamentos.model.Medicamento;
import maldonadourbina.medicamentos.repository.MedicamentoRepository;
import org.springframework.web.client.RestTemplate;


import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MedicamentoController {
    @Autowired
    MedicamentoRepository medicamentoRepository;
    @Autowired
    RestTemplate restTemplate;

    @GetMapping(value = "/MedicamentosMascotas/{idMedicamento}")
    public MedicamentoMascota getMedicamentosMascotas(@PathVariable("idMedicamento") int idMedicamento){
        Medicamento medicamento = medicamentoRepository.findByIdMedicamento(idMedicamento);
        MedicamentoMascota medicamentoMascota=null;
        if (medicamento!=null){
            medicamentoMascota = new MedicamentoMascota(medicamento.getIdMedicamento(), medicamento.getCodigo(), medicamento.getNombre(), medicamento.getSustanciaActiva(), medicamento.getFechaCaducidad());
            Mascota[] mascotas = restTemplate.getForObject ("http://localhost:9998/listByIdMedicamento/" + medicamentoMascota.getIdMedicamento(),Mascota[].class);
            medicamentoMascota.setMascotas(mascotas);
        }
        return medicamentoMascota;
    }

    @GetMapping(value = "/listMedicamentos")
    public List<Medicamento> getListMedicamento(){
        return medicamentoRepository.findAll();
    }

    @GetMapping(value="/medicamento")
    public Medicamento getMedicamento(){
        return medicamentoRepository.findByIdMedicamento(1);
    }

    @PostMapping(value = "/medicamento/nombre")
    public List<Medicamento> getMedicamentoByNombre(@RequestBody Medicamento medicamento){
        return medicamentoRepository.findAllByNombre(medicamento.getNombre());
    }
    @PostMapping(value = "/medicamento/sustanciaActiva")
    public List<Medicamento> getMedicamentoBySustancia(@RequestBody Medicamento medicamento){
        return medicamentoRepository.findAllBySustanciaActiva(medicamento.getSustanciaActiva());
    }
    @PostMapping(value = "/medicamento/add")
    public Medicamento addMedicamento(@RequestBody Medicamento medicamento){
        return medicamentoRepository.save(medicamento);
    }

    @PostMapping(value = "/medicamento/update")
    public Medicamento updateMedicamento(@RequestBody Medicamento medicamento){
        if(medicamentoRepository.findByIdMedicamento(medicamento.getIdMedicamento()) != null) {
            return medicamentoRepository.save(medicamento);
        }
        return null;
    }

    @PostMapping(value = "/medicamento/delete")
    public Boolean deleteMedicamento(@RequestBody Medicamento medicamento) {
        Medicamento m = medicamentoRepository.findByIdMedicamento(medicamento.getIdMedicamento());
        if (m != null) {
            medicamentoRepository.delete(m);
            return true;
        }
        return null;
    }
}