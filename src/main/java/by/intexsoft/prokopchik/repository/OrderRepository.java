package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link Order} entity
 */
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
