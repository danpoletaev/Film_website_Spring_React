package cz.cvut.fit.poletdan;

import cz.cvut.fit.poletdan.model.Role;
import cz.cvut.fit.poletdan.model.User;
import cz.cvut.fit.poletdan.repository.UserRepository;
import cz.cvut.fit.poletdan.service.UserServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    UserServiceImpl service;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Before
    public void load_user() {
        List<Role> roles = Arrays.asList(new Role("ROLE_USER"));
        User user = new User("email@com", "passwd", "test", roles);

        service.save(user);
    }

    @Test
    public void it_should_save_user() {
        List<Role> roles = Arrays.asList(new Role("ROLE_USER"));
        User user = new User();
        user.setEmail("test@email.com");
        user.setPassword("password");
        user.setRoles(roles);
        user.setUsername("username");
        service.save(user);
        Optional<User> loadedUser = service.getByEmail("test@email.com");
        User lUser = new User();
        if ( loadedUser.isPresent() )
            lUser = loadedUser.get();
        assertThat(lUser.getEmail()).isEqualTo("test@email.com");
        assertThat(lUser.getUsername()).isEqualTo("username");
        assertThat(passwordEncoder.matches("password", lUser.getPassword())).isEqualTo(true);
    }

    @Test
    public void it_should_get_user_by_email(){
        Optional<User> loadedUser = service.getByEmail("email@com");
        User lUser = new User();
        if ( loadedUser.isPresent() )
            lUser = loadedUser.get();
        assertThat(lUser.getEmail()).isEqualTo("email@com");
        assertThat(lUser.getUsername()).isEqualTo("test");
        assertThat(passwordEncoder.matches("passwd", lUser.getPassword())).isEqualTo(true);
    }

    @Test
    public void is_should_return_exception() throws UsernameNotFoundException {
        try {
            UserDetails user = service.loadUserByUsername("non-existing email");
        } catch (UsernameNotFoundException e){
            assertThat(e.getMessage()).isSameAs("Invalid username or password");
        }
    }


    @After
    public void deleteUser() {
        userRepository.deleteAll();
    }
}
