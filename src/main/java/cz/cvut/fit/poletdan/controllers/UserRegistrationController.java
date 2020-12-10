package cz.cvut.fit.poletdan.controllers;

import cz.cvut.fit.poletdan.dto.UserRegistrationDTO;
import cz.cvut.fit.poletdan.model.User;
import cz.cvut.fit.poletdan.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserRegistrationController {

    private UserService userService;

    public UserRegistrationController(UserService userService) {
        super();
        this.userService = userService;
    }

    @GetMapping("/getUser")
    public User getUserById(@RequestParam String email){
        Optional<User> optionalUser = userService.getByEmail(email);
        return optionalUser.orElseGet(User::new);
    }

    @GetMapping("/getUserId")
    public Long getUserIdByEmail(@RequestParam String email) {
        Optional<User> optionalUser = userService.getByEmail(email);
        if (optionalUser.isPresent())
            return optionalUser.get().getId();
        else
            return (long)-1;
    }


    @PostMapping("/registration")
    public boolean registerUserAccount(@RequestBody User user){
        try {
            userService.save(user);
            return true;
        } catch (Exception e){
            return false;
        }
    }
}

