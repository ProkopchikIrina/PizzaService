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

    void updateStatus(int id, String status);
}
