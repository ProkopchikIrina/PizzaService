package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.Role;
import by.intexsoft.prokopchik.repository.RoleRepository;
import by.intexsoft.prokopchik.service.IRoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 * Service for working with {@link Role}
 */
@Service
public class RoleService implements IRoleService {
    private final RoleRepository roleRepository;

    /**
     * Constructor of class
     *
     * @param roleRepository role repository
     */
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }
}
