package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link Role} entity
 */
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
