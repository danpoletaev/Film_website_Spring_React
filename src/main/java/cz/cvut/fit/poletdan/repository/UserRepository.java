package cz.cvut.fit.poletdan.repository;

import cz.cvut.fit.poletdan.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    Optional<User> getByEmail(String email);
    @Override
    void deleteById(Long aLong);

    @Override
    void deleteAll();
}

