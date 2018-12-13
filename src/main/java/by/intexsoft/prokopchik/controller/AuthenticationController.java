package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.service.impl.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for Users Authentication
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/doLogin")
public class AuthenticationController {
    private final UserService userService;

    /**
     * Constructor of class
     * @param userService user service
     */
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Performing user authentication
     */
    @GetMapping
    public by.intexsoft.prokopchik.entity.User login(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        log.info("Authentication for user" + user.getUsername());
        return userService.findByUsername(user.getUsername());
    }
}
