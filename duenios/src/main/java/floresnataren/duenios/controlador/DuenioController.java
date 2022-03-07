package floresnataren.duenios.controlador;

import floresnataren.duenios.modelo.*;
import floresnataren.duenios.repositorio.UserRepositorio;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.*;
import floresnataren.duenios.repositorio.DuenioRepository;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class DuenioController {
    @Autowired
    DuenioRepository duenioRepository;

    @Autowired
    UserRepositorio userRepositorio;

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

    private String getJWTToken(String username) {
        String secretKey = "secreto";
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");

        String token = Jwts
                .builder()
                .setId("userJWT")
                .setSubject(username)
                .claim("authorities",
                        grantedAuthorities.stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 6000000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Bearer " + token;
    }

    @PostMapping(value = "/login")
    public String login(@RequestBody UsuarioCredentials credentials){
        User usuario = userRepositorio.findByUsernameAndPassword(credentials.getUser(), credentials.getPassword());
        if (usuario != null)
            return getJWTToken(usuario.getusername());
        else
            return "No hay";

    }
}
