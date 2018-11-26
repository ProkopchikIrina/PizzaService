package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.User;

import java.util.List;

/**
 * Service for working with {@link User}
 */
public interface IUserService {

    /**
     * Find {@link User} by username
     *
     * @param username user's username
     * @return user
     */
    User findByUsername(String username);

    /**
     * Find all {@link User}s
     *
     * @return list of all users
     */
    List<User> findAll();

    /**
     * Save {@link User} and return saved object
     *
     * @param user saved user
     * @return saved user
     */
    User save(User user);
}
