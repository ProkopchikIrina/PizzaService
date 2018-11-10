package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.Order;
import by.intexsoft.prokopchik.repository.OrderRepository;
import by.intexsoft.prokopchik.service.IOrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }
}
