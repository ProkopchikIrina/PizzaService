package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.Order;
import by.intexsoft.prokopchik.entity.Product;

import java.util.List;

public interface IOrderService {
    Order save(Order order);

    List<Order> findAll();
}
