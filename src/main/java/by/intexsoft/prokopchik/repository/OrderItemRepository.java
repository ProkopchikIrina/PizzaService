package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link OrderItem} entity
 */
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
