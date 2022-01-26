package floresnataren.duenios;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class DueniosApplication {

	public static void main(String[] args) {
		SpringApplication.run(DueniosApplication.class, args);
	}
	@Bean
	public RestTemplate getresttemplate(){
		return new RestTemplate();
	}
}
