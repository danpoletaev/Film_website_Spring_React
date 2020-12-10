package cz.cvut.fit.poletdan.controllers;

import cz.cvut.fit.poletdan.model.User;
import cz.cvut.fit.poletdan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class LoginController {
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public User loginPost(@RequestBody User user){
        try {
            UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
            if (passwordEncoder.matches(user.getPassword(), userDetails.getPassword())){
                Optional<User> optionalUser = userService.getByEmail(user.getEmail());
                if (optionalUser.isPresent())
                    return optionalUser.get();
            }
        } catch (Exception e){
            return new User();
        }
        return new User();
    }
}

