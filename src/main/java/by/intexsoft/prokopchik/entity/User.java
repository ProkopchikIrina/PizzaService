package by.intexsoft.prokopchik.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * User entity
 */
@Entity
public class User extends AbstractPersistable<Integer> {
    /**
     * Contains user name
     */
    @Column
    public String username;

    /**
     * Contains user password
     */
    @Column
    public String password;

    /**
     * Contains user e-mail
     */
    @Column
    public String email;

    /**
     * Contains {@link Role}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    public Role role;
}