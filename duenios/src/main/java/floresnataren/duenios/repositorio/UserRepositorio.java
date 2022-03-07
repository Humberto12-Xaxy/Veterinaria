package floresnataren.duenios.repositorio;

import floresnataren.duenios.modelo.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositorio extends CrudRepository<User, Integer>{

    User findByUsernameAndPassword(String username, String password);
}
