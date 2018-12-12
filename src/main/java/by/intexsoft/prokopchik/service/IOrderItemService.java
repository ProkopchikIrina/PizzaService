package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.OrderItem;

import java.util.List;
/**
 * Service for working with {@link OrderItem}
 */
public interface IOrderItemService {
    /**
     * Find all {@link OrderItem}s
     * @return list of order items
     */
    List<OrderItem> findAll();

    /**
     * Saves {@link OrderItem}
     * @param orderItem oder item
     * @return saved order item
     */
    OrderItem save(OrderItem orderItem);

    /**
     * Find all {@link OrderItem}s by order id
     * @param orderId id of order
     * @return order items
     */
    List<OrderItem> findAllByOrderId(int orderId);
}
