package by.intexsoft.prokopchik.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Product entity
 */
@Entity
public class Product extends AbstractPersistable<Integer> {
    /**
     * Contains title of product
     */
    @Column
    public String title;

    /**
     * Contains product ingredients
     */
    @Column
    public String ingredients;

    /**
     * Contains weight of product
     */
    @Column
    public float weight;

    /**
     * Contains price of product
     */
    @Column
    public float price;

}
