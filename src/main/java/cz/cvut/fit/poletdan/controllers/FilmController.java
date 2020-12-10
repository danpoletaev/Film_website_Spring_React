package cz.cvut.fit.poletdan.controllers;

import cz.cvut.fit.poletdan.dto.FilmDTO;
import cz.cvut.fit.poletdan.model.Film;
import cz.cvut.fit.poletdan.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FilmController {
    private FilmService filmService;

    @Autowired
    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping("/allFilms")
    public List<Film> getAllFilms(){
        return filmService.getAll();
    }

    @GetMapping("/film/{id}")
    public Film getById(@PathVariable(value="id") Long id){
        Optional<Film> film = filmService.findFilmById(id);
        if(film.isPresent())
            return film.get();
        else
            return new Film();
    }

    @GetMapping("/updateRating/{id}")
    public void updateById(@PathVariable(value="id") Long id, @RequestParam double rating) {
        filmService.updateRatingById(id, rating);
    }
}
