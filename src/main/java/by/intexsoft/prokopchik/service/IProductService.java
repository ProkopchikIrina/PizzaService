package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.Product;

import java.util.List;

/**
 * Service for working with {@link Product}
 */
public interface IProductService {
    /**
     * Find all {@link Product}s
     *
     * @return list of all products
     */
    List<Product> findAll();

    /**
     * Delete {@link Product} by id
     *
     * @param id deleted product id
     */
    void delete(int id);

    /**
     * Save {@link Product} and return saved object
     *
     * @param product saved product
     * @return saved product
     */
    Product save(Product product);
}
