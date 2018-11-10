package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.Product;
import by.intexsoft.prokopchik.service.IProductService;
import by.intexsoft.prokopchik.service.impl.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for working with {@link Product}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {
    private final IProductService productService;

    /**
     * Constructor of class
     * @param productService product service
     */
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    /**
     * Get all products
     */
    @GetMapping
    public List<Product> findAll(){
        log.info("Find all products");
        return productService.findAll();
    }


    /**
     * Delete {@link Product} by id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        log.info("Delete product with id: {}", id);
        productService.delete(id);
    }

    /**
     * Add new product and returns saved object
     */
    @PostMapping
    public Product create(@RequestBody Product product) {
        log.info("Created new product with title: {}", product.title);
        return productService.save(product);
    }
}
