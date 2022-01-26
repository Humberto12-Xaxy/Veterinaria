package floresnataren.duenios.controlador;

import floresnataren.duenios.modelo.DuenioMascota;
import floresnataren.duenios.modelo.Mascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import floresnataren.duenios.modelo.Duenio;
import floresnataren.duenios.repositorio.DuenioRepository;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class DuenioController {
    @Autowired
    DuenioRepository duenioRepository;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping(value = "/listDuenios")
    public List<Duenio> getListduenio(){
        return duenioRepository.findAll();
    }

    @GetMapping(value = "/duenioConMascotas/{idDuenio}")
    public DuenioMascota getDuenioConMascotas(@PathVariable("idDuenio") int idDuenio){
        Duenio duenio =  duenioRepository.findByIdDuenio(idDuenio);
        DuenioMascota duenioMascota= null;
        if (duenio != null){
            duenioMascota = new DuenioMascota(duenio.getIdDuenio(), duenio.getNombre(), duenio.getTelefono(), duenio.getDireccion());
            Mascota[] mascotas  =restTemplate.getForObject("http://localhost:9998/listByIdDuenio/"+duenioMascota.getIdDuenio(), Mascota[].class);
            duenioMascota.setMascotas(mascotas);
        }
        return duenioMascota;
    }
    @GetMapping(value = "/duenio/direccion")
    public List<Duenio> getDuenioByDireccion(@RequestBody Duenio duenio){
        return duenioRepository.findDuenioByDireccion(duenio.getDireccion());
    }
    @GetMapping(value="/duenio/{idDuenio}")
    public Duenio getDuenio(@PathVariable("idDuenio") int idDuenio){
        return duenioRepository.findByIdDuenio(idDuenio);
    }

    @PostMapping(value = "/duenio/telefono")
    public List<Duenio> getDuenioByCountry(@RequestBody Duenio duenio){
        return duenioRepository.findAllByTelefono(duenio.getTelefono());
    }
    @PostMapping(value = "/duenio/add")
    public Duenio addDuenio(@RequestBody Duenio duenio){
        return duenioRepository.save(duenio);
    }
    @PostMapping(value = "/duenio/update")
    public Duenio updateDuenio(@RequestBody Duenio duenio){
        if(duenioRepository.findByIdDuenio(duenio.getIdDuenio()) != null){
            return duenioRepository.save(duenio);
        }
        return null;
    }
    @PostMapping(value = "/duenio/delete")
    public Boolean deleteDuenio(@RequestBody Duenio duenio){
        Duenio d = duenioRepository.findByIdDuenio(duenio.getIdDuenio());
        if(d != null){
            duenioRepository.delete(d);
            return true;
        }
        return null;
    }
}
