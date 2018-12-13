package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.OrderItem;
import by.intexsoft.prokopchik.service.IOrderItemService;
import by.intexsoft.prokopchik.service.impl.OrderItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for work with {@link OrderItem}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/orderItems")
public class OrderItemController {
    private final IOrderItemService orderItemService;

    /**
     * Constructor of class
     * @param orderItemService order item service
     */
    public OrderItemController(OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
    }

    /**
     * Get all order items
     */
    @GetMapping
    public List<OrderItem> findAll() {
        log.info("Find all order items");
        return orderItemService.findAll();
    }

    /**
     * Add new {@link OrderItem} and returns saved object
     */
    @PostMapping
    public OrderItem create(@RequestBody OrderItem orderItem) {
        log.info("Added new orderItem for order: {}", orderItem.order);
        return orderItemService.save(orderItem);
    }

    /**
     * Get all {@link OrderItem}s by order id
     */
    @GetMapping("/{id}")
    public List<OrderItem> findAllOfOrder(@PathVariable("id")  int id) {
        log.info("Find all items of order with id " + id);
        return orderItemService.findAllByOrderId(id);
    }
}
