package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.Role;
import by.intexsoft.prokopchik.service.IRoleService;
import by.intexsoft.prokopchik.service.impl.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller for work with {@link Role}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/roles")
public class RoleController {

    private final IRoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    /**
     * Get all {@link Role}s
     */
    @GetMapping
    public List<Role> findAll(){
        log.info("Find all roles");
        return roleService.findAll();
    }
}
