package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.OrderItem;

import java.util.List;

public interface IOrderItemService {
    List<OrderItem> findAll();

    OrderItem save(OrderItem orderItem);
}
