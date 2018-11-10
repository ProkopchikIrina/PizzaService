package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.Product;
import by.intexsoft.prokopchik.entity.Role;

import java.util.List;

/**
 * Service for working with {@link Product}
 */
public interface IProductService {
    List<Product> findAll();

    void delete(int id);

    Product save(Product product);
}
