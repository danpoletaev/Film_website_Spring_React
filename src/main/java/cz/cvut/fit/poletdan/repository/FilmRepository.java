package cz.cvut.fit.poletdan.repository;

import cz.cvut.fit.poletdan.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {
    @Override
    Film getOne(Long aLong);

    @Override
    Optional<Film> findById(Long aLong);

    @Override
    List<Film> findAll();

    @Modifying(flushAutomatically = true)
    @Query("update Film f set f.rating = :rating where f.id = :id")
    void updateRating(@Param("id") Long id, @Param("rating") double rating);


}
