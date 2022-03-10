package gomezherrera.mascotas.controller;

import gomezherrera.mascotas.model.Duenio;
import gomezherrera.mascotas.model.MascotaDuenio;
import gomezherrera.mascotas.model.MascotaU;
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
/*
@GetMapping(value = "/listByIdDuenio/{idDuenio}")
    public List<MascotaU> getMascotaByIdDuenio(@PathVariable("idDuenio") int idDuenio){
        return mascotaRepository.findByIdDuenio(idDuenio);
    }
 */

/*
    @GetMapping(value = "/listByIdMedicamento/{idMedicamento}")
    public List<MascotaU> getMascotaByIdMedicamento(@PathVariable("idMedicamento") int idMedicamento){
        return mascotaRepository.findByIdMedicamento(idMedicamento);
    }

 */
/*
    @GetMapping(value = "/listByIdCita/{idCita}")
    public MascotaU getMascotaByIdCita(@PathVariable("idCita") int idCita){
        return mascotaRepository.findByIdCita(idCita);
    }
    */


    @GetMapping(value = "/listMascotas")
    public List<MascotaU> getListMascota(){
        return mascotaRepository.findAll();
    }
    /*
    @GetMapping(value="/mascota")
    public MascotaU getMascota(){
        return mascotaRepository.findByIdMascota(1);
    }
    */
/*
    @PostMapping(value="/mascota/tipo")
    public List<MascotaU> getMascotasByTipo(@RequestBody Mascota mascota){
        return mascotaRepository.findByTipo(mascota.getTipo());
    }
/*
    @GetMapping(value = "/mascotaConDuenio/{idMascota}")
    public MascotaDuenio getMascotaConDuenio(@PathVariable("idMascota") int idMascota){
        MascotaU mascota = mascotaRepository.findByIdMascota(idMascota);
        MascotaDuenio mascotaDuenio= null;
        if (mascota!=null){
            mascotaDuenio = new MascotaDuenio(mascota.getIdMascota(), mascota.getNombre(), mascota.getTipo(), mascota.getIdDuenio(), mascota.getIdCita(), mascota.getIdMedicamento(), mascota.getFechaIngreso(), mascota.getRazon());
            Duenio duenio = restTemplate.getForObject("http://localhost:18080/duenio/"+ mascota.getIdDuenio(), Duenio.class);
            mascotaDuenio.setDuenio(duenio);

        }
        return mascotaDuenio;
    }
*/

    /*
    @PostMapping(value = "/mascota/nombre")
    public List<MascotaU> getMascotaByNombre(@RequestBody MascotaU mascota){
        return mascotaRepository.findAllByNombre(mascota.getNombre());
    }
     */


    @PostMapping(value = "/mascota/add")
    public void addMascota(@RequestBody MascotaU mascota){
        mascotaRepository.save(mascota);
    }
/*
@PostMapping(value = "/mascota/update")
    public MascotaU updateMascota(@RequestBody MascotaU mascota){
        if(mascotaRepository.findByIdMascota(mascota.getIdMascota())!=null){
            return mascotaRepository.save(mascota);
        }
        return null;
    }
 */

/*
@PostMapping(value = "/mascota/delete")
    public Boolean deleteMascota(@RequestBody MascotaU mascota) {
        MascotaU m = mascotaRepository.findByIdMascota(mascota.getIdMascota());
        if (m != null) {
            mascotaRepository.delete(m);
            return true;
        }
        return null;
    }
 */

}