package com.example.demo1.service;

import com.example.demo1.model.User;
import com.example.demo1.web.dto.UserRegistrationDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User save(UserRegistrationDTO registrationDTO);
}
