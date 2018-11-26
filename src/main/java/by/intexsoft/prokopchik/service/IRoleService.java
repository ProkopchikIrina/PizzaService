package by.intexsoft.prokopchik.service;

import by.intexsoft.prokopchik.entity.Role;

import java.util.List;

/**
 * Service for working with {@link Role}
 */
public interface IRoleService {
    /**
     * Find all {@link Role}s
     *
     * @return list of all roles
     */
    List<Role> findAll();
}
