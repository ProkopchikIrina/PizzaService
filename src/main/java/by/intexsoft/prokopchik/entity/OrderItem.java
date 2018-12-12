package by.intexsoft.prokopchik.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * Order item entity
 */
@Entity(name = "order_item")
public class OrderItem extends AbstractPersistable<Integer> {
    /**
     * Contains order
     */
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    public Order order;

    /**
     * Contains count
     */
    @Column
    public short count;

    /**
     * Contains {@link Product}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    public Product product;
}
