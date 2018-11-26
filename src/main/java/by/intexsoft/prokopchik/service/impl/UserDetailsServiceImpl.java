package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.User;
import by.intexsoft.prokopchik.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * Implementation of UserDetailsService
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private IUserService userService;

//    public UserDetailsServiceImpl(UserService userService) {
//        this.userService = userService;
//    }

    /**
     * Load user by username
     *
     * @param username user's username
     * @return loaded user
     * @throws UsernameNotFoundException Thrown if an implementation cannot locate a user by its username
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUsername(username);
        Set<GrantedAuthority> roles = new HashSet<>();
        System.out.println(user.role.name);
        roles.add(new SimpleGrantedAuthority(user.role.name));
        return new org.springframework.security.core.userdetails.User(user.username,
                user.password,
                roles);
    }
}
