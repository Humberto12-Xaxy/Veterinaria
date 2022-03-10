package floresnataren.duenios.modelo;

public class UsuarioCredentials {

    private String username;
    private String password;
    public UsuarioCredentials(){}

    public UsuarioCredentials(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UsuarioCredentials{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }


}
