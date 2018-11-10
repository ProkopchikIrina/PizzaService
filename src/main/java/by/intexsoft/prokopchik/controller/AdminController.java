package by.intexsoft.prokopchik.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Admin test controller
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
    /**
     * Method for test admin's rights
     *
     * @return message
     */
    @GetMapping
    public String helloAdmin() {
        log.info("hello, admin");
        return "hello, admin";
    }
}
