package cz.cvut.fit.poletdan.service;

import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.repository.FilmRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FilmServiceImpl implements FilmService {

    private FilmRepository filmRepository;

    public FilmServiceImpl(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    @Override
    public List<Film> getAll() {
        return filmRepository.findAll();
    }

    @Transactional
    @Override
    public void updateRatingById(Long id, double rating) {
        double newRating;
        Optional<Film> film = findFilmById(id);
        if(!film.isPresent()) {
            return;
        }
        newRating = (film.get().getRating() + rating) / 2;
        filmRepository.updateRating(id, newRating);
    }

    @Override
    public Optional<Film> findFilmById(Long id) {
        return filmRepository.findById(id);
    }


}
