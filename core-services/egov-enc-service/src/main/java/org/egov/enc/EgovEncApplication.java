package org.egov.enc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "org.egov.enc", "org.egov.enc.web.controllers" , "org.egov.enc.config"})
public class EgovEncApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(EgovEncApplication.class, args);
    }

}
