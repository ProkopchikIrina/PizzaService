package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.User;
import by.intexsoft.prokopchik.service.IUserService;
import by.intexsoft.prokopchik.service.impl.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for work with {@link User}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    private final IUserService userService;

    /**
     * Constructor of class
     * @param userService user service
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Get all users
     */
    @GetMapping
    public List<User> findAll(){
        log.info("Find all users");
        return userService.findAll();
    }

    /**
     * Add new user and returns saved object
     */
    @PostMapping
    public User create(@RequestBody User user) {
        log.info("Created new user with name: {}", user.username);
        return userService.save(user);
    }

    /**
     * Delete {@link User} by id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        log.info("Delete user with id: {}", id);
        userService.delete(id);
    }
}
