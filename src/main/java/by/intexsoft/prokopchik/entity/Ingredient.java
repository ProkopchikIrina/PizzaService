package by.intexsoft.prokopchik.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.List;

/**
 * Ingredient entity
 */
@Entity
public class Ingredient extends AbstractPersistable<Integer> {
    /**
     * Contains name of ingredient
     */
    @Column
    public String name;

    /**
     * Contains price of ingredient
     */
    @Column
    public float price;

    /**
     * Contains weight of ingredient
     */
    @Column
    public float weight;
}
