package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.OrderItem;
import by.intexsoft.prokopchik.repository.OrderItemRepository;
import by.intexsoft.prokopchik.repository.OrderRepository;
import by.intexsoft.prokopchik.service.IOrderItemService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService implements IOrderItemService {
    private final OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public List<OrderItem> findAll() {
        return orderItemRepository.findAll();
    }

    @Override
    public OrderItem save(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }
}
