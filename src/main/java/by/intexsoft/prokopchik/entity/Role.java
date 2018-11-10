package by.intexsoft.prokopchik.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Role entity
 */
@Entity
public class Role extends AbstractPersistable<Integer> {
    /**
     * Contains role name
     */
    @Column
    public String name;
}
