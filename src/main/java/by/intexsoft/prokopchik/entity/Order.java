package by.intexsoft.prokopchik.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.sql.Time;
import java.util.Date;

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
}
