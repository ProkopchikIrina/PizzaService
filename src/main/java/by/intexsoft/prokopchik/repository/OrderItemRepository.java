package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Order;
import by.intexsoft.prokopchik.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for {@link OrderItem} entity
 */
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
    /**
     * Find all items of order
     * @param id of order
     * @return items of order
     */
    List<OrderItem> findAllByOrder_Id(Integer id);
}
