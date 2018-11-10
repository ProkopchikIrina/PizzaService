package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.User;

import java.util.List;

/**
 * Service for working with {@link User}
 */
public interface IUserService {
    /**
     * Find user by name
     */
    User findByUsername(String username);

    /**
     * Find all user
     */
    List<User> findAll();

    /**
     * Add user to DB
     */
    User save(User user);
}
