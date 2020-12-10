package cz.cvut.fit.poletdan.service;

import cz.cvut.fit.poletdan.dto.FilmDTO;
import cz.cvut.fit.poletdan.model.Film;

import java.util.List;
import java.util.Optional;


public interface FilmService {
    List<Film> getAll();
    void updateRatingById(Long id, double rating);
    Optional<Film> findFilmById(Long id);
}
