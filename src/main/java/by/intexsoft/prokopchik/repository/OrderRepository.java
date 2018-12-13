package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Spring Data JPA repository for {@link Order} entity
 */
public interface OrderRepository extends JpaRepository<Order, Integer> {
    /**
     * Update status of {@link Order}
     * @param id of order
     * @param status new status of order
     */
    @Query("update Order set status =:status where id =:id")
    void updateStatus(@Param("id") int id, @Param("status") String status);
}
