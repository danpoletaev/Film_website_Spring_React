package cz.cvut.fit.poletdan.repository;

import cz.cvut.fit.poletdan.model.Review;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Override
    List<Review> findAll(Sort sort);

    @Override
    void deleteById(Long aLong);

}
