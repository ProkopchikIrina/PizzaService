package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.Order;

import java.util.List;

/**
 * Service for working with {@link Order}
 */
public interface IOrderService {
    /**
     * Save {@link Order} and return saved object
     *
     * @param order order
     * @return saved order
     */
    Order save(Order order);

    /**
     * Find all {@link Order}s
     *
     * @return list of all orders
     */
    List<Order> findAll();

    /**
     * Update status of {@link Order}
     * @param id order id
     * @param status new status of order
     */
    void updateStatus(int id, String status);
}
