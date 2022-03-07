package floresnataren.duenios.modelo;

public class UsuarioCredentials {

    private String user;
    private String password;

    public UsuarioCredentials(String user, String password) {
        this.user = user;
        this.password = password;
    }

    public UsuarioCredentials() {
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setPassword(String contraseña) {
        this.password = contraseña;
    }

    @Override
    public String toString() {
        return "UsuarioCredentials{" +
                "user='" + user + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
