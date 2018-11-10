package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link User} entity
 */
public interface UserRepository extends JpaRepository<User, Integer> {
    /**
     * Find user by username
     *
     * @param username user's username
     * @return user
     */
    User findByUsername(String username);
}
