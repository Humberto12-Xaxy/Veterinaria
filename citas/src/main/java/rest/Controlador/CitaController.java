package rest.Controlador;

import rest.Modelo.CitaMascota;
import rest.Modelo.Mascota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.Modelo.Cita;
import rest.Repositorio.CitaRepository;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class CitaController {
    @Autowired
    CitaRepository citaRepository;
    @Autowired
    RestTemplate restTemplate;

    @GetMapping(value = "/listCita")
    public List<Cita> getListcita(){
        return citaRepository.findAll();
    }

    @GetMapping(value="/cita")
    public Cita getCita(){
        return citaRepository.findByIdCita(1);
    }

    @PostMapping(value = "/cita/fecha/")
    public List<Cita> getCitaByCountry(@RequestBody Cita cita){
        return citaRepository.findAllByFecha(cita.getFecha());
    }

    @GetMapping(value = "/MascotaConCita/{idCita}")
    public CitaMascota getMascotaConCita(@PathVariable("idCita") int idCita){
        Cita cita = citaRepository.findByIdCita(idCita);
        CitaMascota citaMascota = null;
        if(cita != null){
            citaMascota = new CitaMascota(cita.getIdCita(),cita.getFecha(), cita.getHora(), cita.getTipoServicio());
            Mascota mascota = restTemplate.getForObject("http://localhost:9998/listByIdCita/"+citaMascota.getIdCita(),Mascota.class);
            citaMascota.setMascota(mascota);
        }
        return citaMascota;
    }

    @PostMapping(value = "/cita/add")
    public Cita addCita(@RequestBody Cita cita){
        return citaRepository.save(cita);
    }

    @PostMapping(value = "/cita/update")
    public Cita updateCita(@RequestBody Cita cita){
        if(citaRepository.findByIdCita(cita.getIdCita())!=null){
            return citaRepository.save(cita);
        }
        return null;
    }

    @PostMapping(value = "/cita/update/fecha")
    public Cita updateFecha(@RequestBody Cita cita){
        Cita d = citaRepository.findByIdCita(cita.getIdCita());
        if(d != null){
            d.setFecha(cita.getFecha());
            if (d.getFecha() != null)
                return citaRepository.save(d);
            return null;
        }
        return null;
    }

    @PostMapping(value = "/cita/update/hora")
    public Cita updateHora(@RequestBody Cita cita){
        Cita d = citaRepository.findByIdCita(cita.getIdCita());
        if(d != null){
            if (d.getFecha() != null)
                d.setHora(cita.getHora());
            return citaRepository.save(d);
        }
        return null;
    }

    @PostMapping(value = "/cita/upate/fecha-hora")
    public Cita updateFechaHora(@RequestBody Cita cita){
        Cita d = citaRepository.findByIdCita(cita.getIdCita());
        if(d != null){
            if (d.getFecha() != null) {
                d.setFecha(cita.getFecha());
                d.setHora(cita.getHora());
            }
            return citaRepository.save(d);
        }
        return null;
    }

    @PostMapping(value = "/cita/update/fecha-tipoServicio")
    public Cita updateFechaTipoS(@RequestBody Cita cita){
        Cita d = citaRepository.findByIdCita(cita.getIdCita());
        if(d != null){
            if (d.getFecha() != null) {
                d.setFecha(cita.getFecha());
                d.setTipoServicio(cita.getTipoServicio());
            }
            return citaRepository.save(d);
        }
        return null;
    }

    @PostMapping(value = "/cita/delete")
    public Boolean deleteCita(@RequestBody Cita cita){
        Cita d = citaRepository.findByIdCita(cita.getIdCita());
        if(d != null){
            citaRepository.delete(d);
            return true;
        }
        return null;
    }
}