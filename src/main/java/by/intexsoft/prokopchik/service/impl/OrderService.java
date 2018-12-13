package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.Order;
import by.intexsoft.prokopchik.entity.OrderItem;
import by.intexsoft.prokopchik.repository.OrderRepository;
import by.intexsoft.prokopchik.service.IOrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    private final OrderRepository orderRepository;

    /**
     * Constructor of class
     *
     * @param orderRepository     order repository
     */
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public Order save(Order order) {
        Order savedOrder = orderRepository.save(order);
        List<OrderItem> orderItems = order.orderItems;
        for (OrderItem orderItem : orderItems) {
            orderItem.order = savedOrder;
        }
        return savedOrder;
    }

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public void updateStatus(int id, String status) {
        orderRepository.updateStatus(id, status);
    }
}
