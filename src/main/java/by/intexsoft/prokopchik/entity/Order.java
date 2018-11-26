package by.intexsoft.prokopchik.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
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
    public Time time;

    /**
     * Contains order date
     */
    @Column
    public Date date;

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

//    /**
//     * Contains order items
//     */
//    @OneToMany(fetch = FetchType.EAGER)
//    @JoinColumn(name = "order_id", referencedColumnName = "id")
//    public List<OrderItem> orderItems;
}
