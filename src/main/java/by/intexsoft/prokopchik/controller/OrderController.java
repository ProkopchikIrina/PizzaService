package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.Order;
import by.intexsoft.prokopchik.service.IOrderService;
import by.intexsoft.prokopchik.service.impl.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for work with {@link Order}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/orders")
public class OrderController {
    private final IOrderService orderService;

    /**
     * Constructor of class
     * @param orderService order service
     */
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    /**
     * Get all orders
     */
    @GetMapping
    public List<Order> findAll(){
        log.info("Find all orders");
        return orderService.findAll();
    }

    /**
     * Add new {@link Order} and returns saved object
     */
    @PostMapping
    public Order create(@RequestBody Order order) {
        log.info("Created new order with address: {}", order.address);
        return orderService.save(order);
    }

    /**
     * Update status of {@link Order}
     */
    @PutMapping
    public void updateStatus(@RequestBody Order order) {
        log.info("Created new order with address: {}", order.getId());
        orderService.updateStatus(order.getId(), order.status);
    }
}
