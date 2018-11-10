package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.Product;
import by.intexsoft.prokopchik.entity.User;
import by.intexsoft.prokopchik.repository.ProductRepository;
import by.intexsoft.prokopchik.service.IProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ProductService implements IProductService {
    private final ProductRepository productRepository;

    /**
     * Constructor of class
     *
     * @param productRepository product repository
     */
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    /**
     * Find all users
     *
     * @return all users
     */
    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public void delete(int id) {
        productRepository.deleteById(id);
    }

    /**
     * Save product and return saved object
     *
     * @param product saved product
     * @return saved product
     */
    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }
}
