package gomezherrera.mascotas.controller;

import gomezherrera.mascotas.model.Duenio;
import gomezherrera.mascotas.model.MascotaDuenio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import gomezherrera.mascotas.model.Mascota;
import gomezherrera.mascotas.repository.MascotaRepository;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MascotaController {

    @Autowired
    MascotaRepository mascotaRepository;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping(value = "/listByIdDuenio/{idDuenio}")
    public List<Mascota> getMascotaByIdDuenio(@PathVariable("idDuenio") int idDuenio){
        return mascotaRepository.findByIdDuenio(idDuenio);
    }

    @GetMapping(value = "/listByIdMedicamento/{idMedicamento}")
    public List<Mascota> getMascotaByIdMedicamento(@PathVariable("idMedicamento") int idMedicamento){
        return mascotaRepository.findByIdMedicamento(idMedicamento);
    }

    @GetMapping(value = "/listByIdCita/{idCita}")
    public Mascota getMascotaByIdCita(@PathVariable("idCita") int idCita){
        return mascotaRepository.findByIdCita(idCita);
    }

    @GetMapping(value = "/listMascotas")
    public List<Mascota> getListMascota(){
        return mascotaRepository.findAll();
    }

    @GetMapping(value="/mascota")
    public Mascota getMascota(){
        return mascotaRepository.findByIdMascota(1);
    }

    @PostMapping(value="/mascota/tipo")
    public List<Mascota> getMascotasByTipo(@RequestBody Mascota mascota){
        return mascotaRepository.findByTipo(mascota.getTipo());
    }

    @GetMapping(value = "/mascotaConDuenio/{idMascota}")
    public MascotaDuenio getMascotaConDuenio(@PathVariable("idMascota") int idMascota){
        Mascota mascota = mascotaRepository.findByIdMascota(idMascota);
        MascotaDuenio mascotaDuenio= null;
        if (mascota!=null){
            mascotaDuenio = new MascotaDuenio(mascota.getIdMascota(), mascota.getNombre(), mascota.getTipo(), mascota.getIdDuenio(), mascota.getIdCita(), mascota.getIdMedicamento(), mascota.getFechaIngreso(), mascota.getRazon());
            Duenio duenio = restTemplate.getForObject("http://localhost:18080/duenio/"+ mascota.getIdDuenio(), Duenio.class);
            mascotaDuenio.setDuenio(duenio);

        }
        return mascotaDuenio;
    }

    @PostMapping(value = "/mascota/nombre")
    public List<Mascota> getMascotaByNombre(@RequestBody Mascota mascota){
        return mascotaRepository.findAllByNombre(mascota.getNombre());
    }

    @PostMapping(value = "/mascota/add")
    public Mascota addMascota(@RequestBody Mascota mascota){
        return mascotaRepository.save(mascota);
    }

    @PostMapping(value = "/mascota/update")
    public Mascota updateMascota(@RequestBody Mascota mascota){
        if(mascotaRepository.findByIdMascota(mascota.getIdMascota())!=null){
            return mascotaRepository.save(mascota);
        }
        return null;
    }

    @PostMapping(value = "/mascota/delete")
    public Boolean deleteMascota(@RequestBody Mascota mascota) {
        Mascota m = mascotaRepository.findByIdMascota(mascota.getIdMascota());
        if (m != null) {
            mascotaRepository.delete(m);
            return true;
        }
        return null;
    }
}