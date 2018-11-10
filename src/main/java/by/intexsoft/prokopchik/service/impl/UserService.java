package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.User;
import by.intexsoft.prokopchik.repository.UserRepository;
import by.intexsoft.prokopchik.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Constructor of class
     *
     * @param userRepository        user repository
     * @param bCryptPasswordEncoder encoder
     */
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     * Find user by username
     *
     * @param username user's username
     * @return user
     */
    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * Find all users
     *
     * @return all users
     */
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    /**
     * Save user and return saved object
     *
     * @param user saved user
     * @return saved user
     */
    @Override
    public User save(User user) {
        user.password = bCryptPasswordEncoder.encode(user.password);
        return userRepository.save(user);
    }
}
