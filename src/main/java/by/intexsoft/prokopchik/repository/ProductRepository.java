package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link Product} entity
 */
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
