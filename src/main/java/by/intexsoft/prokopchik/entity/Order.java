package by.intexsoft.prokopchik.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.List;

/**
 * Order entity
 */
@Entity
public class Order extends AbstractPersistable<Integer> {
    /**
     * Contains order address
     */
    @Column
    public String address;

    /**
     * Contains order time
     */
    @Column
    public String time;

    /**
     * Contains order date
     */
    @Column
    public String date;

    /**
     * Contains phone number
     */
    @Column(name = "phone_number")
    public String phoneNumber;

    /**
     * Contains order status
     */
    @Column
    public String status;

    /**
     * Contains comment of order
     */
    @Column
    public String comment;

    /**
     * Contains order items
     */
    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    public List<OrderItem> orderItems;

    /*
    * Contains positions, created by constructor
    */
    @Column
    public String constructor;
}
