package cz.cvut.fit.poletdan.service;

import cz.cvut.fit.poletdan.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService extends UserDetailsService {
    User save(User user);
    Optional<User> getByEmail(String email);
}
