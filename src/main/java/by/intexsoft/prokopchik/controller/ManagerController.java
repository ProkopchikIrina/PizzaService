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
@RequestMapping("/manager")
public class ManagerController {
    /**
     * Method for test manager's rights
     *
     * @return message
     */
    @GetMapping
    public String helloManager() {
        log.info("hello, manager");
        return "hello, manager";
    }
}
